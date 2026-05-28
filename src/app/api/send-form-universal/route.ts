// app/api/send-form-universal/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Конфигурация SMTP
const smtpConfig = {
  host: 'smtp.yandex.ru',
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER, // Измените на правильный email
    pass: process.env.SMTP_PASS, // Нужно указать правильный пароль!
  },
};

const transporter = nodemailer.createTransport(smtpConfig);

// Разрешенные домены (регулярное выражение)
const ALLOWED_ORIGINS = /^https?:\/\/([a-zA-Z0-9-]+\.)*acr-agency\.ru$/i;

// Функция для получения CORS заголовков динамически (возвращаем Record<string, string>)
function getCorsHeaders(origin: string | null): Record<string, string> {
  // Если origin разрешен или это localhost для разработки
  if (origin && (ALLOWED_ORIGINS.test(origin) || process.env.NODE_ENV === 'development')) {
    return {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Max-Age': '86400',
    };
  }
  
  // Fallback - разрешаем всем (но без credentials)
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
  };
}

function escapeHtml(str: string): string {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function getFieldLabel(key: string): string {
  const labels: Record<string, string> = {
    'name': 'Имя',
    'phone': 'Телефон',
    'email': 'Email',
    'service': 'Сфера деятельности',
    'message': 'Сообщение',
    'topic': 'Тема',
    'comment': 'Комментарий',
    'company': 'Компания',
    'position': 'Должность',
    'city': 'Город',
    'address': 'Адрес',
  };
  return labels[key] || key.charAt(0).toUpperCase() + key.slice(1);
}

function createDynamicEmailHTML(data: Record<string, any>, source: string): string {
  const currentDate = new Date().toLocaleString('ru-RU');
  const subject = data._subject || 'Новая заявка с сайта';
  const excludeFields = ['_subject', '_gotcha', 'privacy_policy'];
  
  const displayFields = Object.entries(data).filter(
    ([key, value]) => !excludeFields.includes(key) && value !== undefined && value !== ''
  );
  
  const fieldRows = displayFields.map(([key, value]) => {
    const fieldName = getFieldLabel(key);
    return `
      <li style="width: 100%; padding: 10px 0px; border-bottom: 1px solid #eee;">
        <span>${fieldName}:</span> 
        <b style="float: right; max-width: 60%; text-align: right; word-break: break-word;">
          ${escapeHtml(String(value))}
        </b>
      </li>
    `;
  }).join('');
  
  return `
    <!DOCTYPE html>
    <html lang="ru">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${escapeHtml(subject)}</title>
    </head>
    <body style="text-align: center; font-family: arial, sans-serif;">
      <div style="width:100%; background: #eee; padding:30px; display: inline-block;">
        <div style="width:600px; background: #eee; padding:0px; display: inline-block;">
          <div style="text-align: center; background-color: #fff; padding: 30px; border-radius: 3px; line-height: 24px;">
            <h2 style="margin-top: 10px; color:#000">
              Новая заявка с сайта <span style="color: #203c97;">${escapeHtml(source)}</span>
            </h2>
            <p style="color: #666; font-size: 12px;">Время отправки: ${currentDate}</p>
            <p style="color: #666; font-size: 12px;">Тема: ${escapeHtml(subject)}</p>
            
            <table style="margin-top: 20px; text-align: left; width: 100%;">
              <tr>
                <td style="width: 100%; color: #000;">
                  <ul style="list-style-type: none; margin: 0px; padding: 0px; font-size: 14px;">
                    ${fieldRows || '<li style="padding: 10px 0px;">Нет данных для отображения</li>'}
                  </ul>
                </td>
              </tr>
            </table>
          </div>
          
          <table style="text-align: center; font-size: 12px; width: 100%; padding: 20px 0px;">
            <tr>
              <td>Техподдержка</td>
              <td>Аналитический центр развитие</td>
              <td>+7 (927) 270-53-30</td>
              <td><a href="https://acr-agency.ru/">acr-agency.ru</a></td>
            </tr>
          </table>
        </div>
      </div>
    </body>
    </html>
  `;
}

// Обработка OPTIONS запроса (preflight)
export async function OPTIONS(request: NextRequest) {
  const origin = request.headers.get('origin');
  const corsHeaders = getCorsHeaders(origin);
  
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders,
  });
}

// Основной POST обработчик
export async function POST(request: NextRequest) {
  const origin = request.headers.get('origin');
  const corsHeaders = getCorsHeaders(origin);
  
  console.log('📨 Получен POST запрос');
  console.log('📍 Origin:', origin);
  
  try {
    // Получаем данные из запроса
    let body: Record<string, any> = {};
    const contentType = request.headers.get('content-type') || '';
    
    if (contentType.includes('application/json')) {
      body = await request.json();
    } else if (contentType.includes('application/x-www-form-urlencoded') || 
               contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      formData.forEach((value, key) => {
        body[key] = value.toString();
      });
    } else {
      try {
        body = await request.json();
      } catch {
        body = {};
      }
    }
    
    console.log('📝 Данные формы:', body);
    
    // Проверяем на спам
    if (body._gotcha && body._gotcha !== '') {
      console.log('🕷️ Запрос от бота, игнорируем');
      return NextResponse.json({ 
        success: true, 
        message: 'OK' 
      }, { headers: corsHeaders });
    }
    
    // Проверяем обязательные поля
    if (!body.phone && !body.email) {
      console.log('❌ Ошибка: нет телефона или email');
      return NextResponse.json(
        { error: 'Укажите телефон или email для связи' },
        { status: 400, headers: corsHeaders }
      );
    }
    
    // Получаем источник
    const source = origin || request.headers.get('referer') || 'acr-agency.ru';
    const subject = body._subject || `Заявка с сайта от ${new Date().toLocaleString('ru-RU')}`;
    const html = createDynamicEmailHTML(body, source);
    
    // Отправляем письма
    const recipients = ['acr-agency@yandex.ru', 'ForAnalyticss@yandex.ru'];
    const results = [];
    
    for (const recipient of recipients) {
      console.log(`📧 Отправка письма на ${recipient}...`);
      
      try {
        const result = await transporter.sendMail({
          from: '"Аналитический центр развитие" <ForAnalyticss@yandex.ru>',
          to: recipient,
          subject: subject,
          html: html,
          replyTo: body.email || undefined,
        });
        
        console.log(`✅ Письмо отправлено на ${recipient}:`, result.messageId);
        results.push({ recipient, success: true });
      } catch (err: any) {
        console.error(`❌ Ошибка отправки на ${recipient}:`, err.message);
        results.push({ recipient, success: false, error: err.message });
      }
    }
    
    const anySuccess = results.some(r => r.success);
    
    if (!anySuccess) {
      throw new Error('Не удалось отправить письма');
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.',
      details: results 
    }, { 
      status: 200,
      headers: corsHeaders 
    });
    
  } catch (error: any) {
    console.error('❌ Ошибка:', error);
    
    return NextResponse.json(
      { 
        error: 'Ошибка отправки. Пожалуйста, попробуйте позже.', 
        details: error.message 
      },
      { 
        status: 500,
        headers: corsHeaders 
      }
    );
  }
}

// Обработка GET
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405, headers: { 'Access-Control-Allow-Origin': '*' } }
  );
}