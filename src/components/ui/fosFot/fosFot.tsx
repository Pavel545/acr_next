"use client";

import React, { useState, useRef, useEffect } from "react";
import s from "./fosFot.module.scss";

interface FormData {
    name: string;
    phone: string;
    email: string;
    quest: string;
    kompany: string;
    date: string;
    time: string;
    privacy_policy: boolean;
}

interface FosFotProps {
    endpoint?: string;
    defaultTitle?: string;
}

export default function FosFot({ 
    endpoint = "https://bravo.acr-agency.ru/api/send-form-universal",
    defaultTitle = "Давайте обсудим ваш проект"
}: FosFotProps): React.JSX.Element {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showThankYou, setShowThankYou] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        name: "",
        quest: '',
        phone: "",
        email: "",
        kompany: "",
        date: "",
        time: "",
        privacy_policy: false
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    
    const nameInputRef = useRef<HTMLInputElement>(null);
    const phoneInputRef = useRef<HTMLInputElement>(null);
    const emailInputRef = useRef<HTMLInputElement>(null);

    // Error messages
    const getErrorMessage = (fieldName: string, type: string): string => {
        const messages: Record<string, Record<string, string>> = {
            name: {
                required: "Введите ваше имя",
                minLength: "Имя должно содержать минимум 2 символа",
                invalid: "Имя должно содержать только буквы",
            },
            phone: {
                required: "Введите номер телефона",
                incomplete: "Введите номер телефона полностью",
            },
            email: {
                required: "Введите email",
                invalid: "Введите корректный email",
            },
            kompany: {
                required: "Введите название компании",
            },
            privacy: {
                required: "Необходимо согласие на обработку данных",
            },
        };

        return messages[fieldName]?.[type] || "Поле заполнено некорректно";
    };

    // Validators
    const validateName = (value: string): { valid: boolean; error?: string } => {
        if (!value.trim()) {
            return { valid: false, error: getErrorMessage("name", "required") };
        }
        if (value.trim().length < 2) {
            return { valid: false, error: getErrorMessage("name", "minLength") };
        }
        if (!/^[a-zA-Zа-яА-ЯёЁ\s\-]+$/.test(value.trim())) {
            return { valid: false, error: getErrorMessage("name", "invalid") };
        }
        return { valid: true };
    };

    const validatePhone = (value: string): { valid: boolean; error?: string } => {
        if (!value.trim()) {
            return { valid: false, error: getErrorMessage("phone", "required") };
        }
        const digits = value.replace(/\D/g, "");
        if (digits.length < 11) {
            return { valid: false, error: getErrorMessage("phone", "incomplete") };
        }
        return { valid: true };
    };

    const validateEmail = (value: string): { valid: boolean; error?: string } => {
        if (!value.trim()) {
            return { valid: false, error: getErrorMessage("email", "required") };
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
            return { valid: false, error: getErrorMessage("email", "invalid") };
        }
        return { valid: true };
    };

    const validateKompany = (value: string): { valid: boolean; error?: string } => {
        if (!value.trim()) {
            return { valid: false, error: getErrorMessage("kompany", "required") };
        }
        return { valid: true };
    };

    const validatePrivacy = (checked: boolean): { valid: boolean; error?: string } => {
        if (!checked) {
            return { valid: false, error: getErrorMessage("privacy", "required") };
        }
        return { valid: true };
    };

    // Phone mask
    const formatPhone = (value: string): string => {
        let digits = value.replace(/\D/g, "");
        if (!digits) return "";
        
        if (digits.length > 11) {
            digits = digits.slice(0, 11);
        }
        
        let formatted = "+7";
        if (digits.length > 1) formatted += " (" + digits.slice(1, 4);
        if (digits.length >= 4) formatted += ") " + digits.slice(4, 7);
        if (digits.length >= 7) formatted += "." + digits.slice(7, 9);
        if (digits.length >= 9) formatted += "." + digits.slice(9, 11);
        
        return formatted;
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const formatted = formatPhone(e.target.value);
        setFormData(prev => ({ ...prev, phone: formatted }));
        if (errors.phone) {
            setErrors(prev => ({ ...prev, phone: '' }));
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value, type } = e.target;
        const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
        
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateField = (name: string, value: any): string => {
        let result;
        switch (name) {
            case 'name':
                result = validateName(value);
                break;
            case 'phone':
                result = validatePhone(value);
                break;
            case 'email':
                result = validateEmail(value);
                break;
            case 'kompany':
                result = validateKompany(value);
                break;
            case 'privacy_policy':
                result = validatePrivacy(value);
                break;
            default:
                return '';
        }
        return result.error || '';
    };

    const validateForm = (): boolean => {
        const newErrors: Record<string, string> = {};
        
        newErrors.name = validateField('name', formData.name);
        newErrors.phone = validateField('phone', formData.phone);
        newErrors.email = validateField('email', formData.email);
        newErrors.kompany = validateField('kompany', formData.kompany);
        newErrors.privacy = validateField('privacy_policy', formData.privacy_policy);
        
        setErrors(newErrors);
        
        return !Object.values(newErrors).some(error => error);
    };

    const resetForm = () => {
        setFormData({
            name: "",
            quest: '',
            phone: "",
            email: "",
            kompany: "",
            date: "",
            time: "",
            privacy_policy: false
        });
        setErrors({});
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        
        if (!validateForm()) {
            // Scroll to first error field
            const firstErrorField = document.querySelector(`.${s.error}`);
            if (firstErrorField) {
                firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            return;
        }
        
        setIsSubmitting(true);
        
        try {
            // Prepare data for submission
            const submitData = {
                name: formData.name,
                phone: formData.phone,
                email: formData.email,
                company: formData.kompany,
                quest: formData.quest,
                date: formData.date,
                time: formData.time,
                privacy_policy: formData.privacy_policy,
                form_name: defaultTitle,
                form_type: "fosfot"
            };
            
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 30000);
            
            const response = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(submitData),
                signal: controller.signal
            });
            
            clearTimeout(timeoutId);
            
            if (!response.ok) {
                throw new Error("Ошибка отправки");
            }
            
            const result = await response.json();
            console.log("Form submitted successfully:", result);
            
            setShowThankYou(true);
            resetForm();
            
            setTimeout(() => {
                setShowThankYou(false);
            }, 5000);
            
        } catch (error) {
            console.error("Submit error:", error);
            if (error instanceof Error && error.name === 'AbortError') {
                alert("Превышено время ожидания ответа от сервера. Пожалуйста, попробуйте позже.");
            } else {
                alert("Ошибка отправки. Пожалуйста, попробуйте позже или свяжитесь с нами другим способом.");
            }
        } finally {
            setIsSubmitting(false);
        }
    };

  

    if (showThankYou) {
        return (
            <div className={s.body}>
                <div className={s.thankYou}>
                    <div className={s.thankYouIcon}>✅</div>
                    <h3 className="h3">Спасибо за заявку!</h3>
                    <p className={`t16 ${s.thankYouText}`}>
                        Мы свяжемся с вами в ближайшее время
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className={s.body}>
            <form className={s.form} onSubmit={handleSubmit} noValidate>
                <div className={s.osnova}>
                    <div className={s.box}>
                        <h3 className="h3">
                            {defaultTitle}
                        </h3>
                        <p className={`t16 ${s.agreement}`}>
                            Заполните контактные данные, наш сотрудник свяжется с Вами в течении рабочего времени
                        </p>
                        
                        <div className={s.basa4}>
                            <div className={s.inputWrapper}>
                                <input
                                    ref={nameInputRef}
                                    type="text"
                                    name="name"
                                    placeholder="Ваше имя *"
                                    className={`${s.input} ${errors.name ? s.error : ''}`}
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    aria-invalid={!!errors.name}
                                    aria-describedby={errors.name ? "name-error" : undefined}
                                />
                                {errors.name && (
                                    <span id="name-error" className={s.errorMessage}>
                                        {errors.name}
                                    </span>
                                )}
                            </div>

                            <div className={s.inputWrapper}>
                                <input
                                    ref={emailInputRef}
                                    type="email"
                                    name="email"
                                    placeholder="E-mail *"
                                    className={`${s.input} ${errors.email ? s.error : ''}`}
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    aria-invalid={!!errors.email}
                                    aria-describedby={errors.email ? "email-error" : undefined}
                                />
                                {errors.email && (
                                    <span id="email-error" className={s.errorMessage}>
                                        {errors.email}
                                    </span>
                                )}
                            </div>

                            <div className={s.inputWrapper}>
                                <input
                                    ref={phoneInputRef}
                                    type="tel"
                                    name="phone"
                                    placeholder="+7 (___) ___.__.__ *"
                                    className={`${s.input} ${errors.phone ? s.error : ''}`}
                                    value={formData.phone}
                                    onChange={handlePhoneChange}
                                    aria-invalid={!!errors.phone}
                                    aria-describedby={errors.phone ? "phone-error" : undefined}
                                />
                                {errors.phone && (
                                    <span id="phone-error" className={s.errorMessage}>
                                        {errors.phone}
                                    </span>
                                )}
                            </div>

                            <div className={s.inputWrapper}>
                                <input
                                    type="text"
                                    name="kompany"
                                    placeholder="Компания *"
                                    className={`${s.input} ${errors.kompany ? s.error : ''}`}
                                    value={formData.kompany}
                                    onChange={handleInputChange}
                                    aria-invalid={!!errors.kompany}
                                    aria-describedby={errors.kompany ? "kompany-error" : undefined}
                                />
                                {errors.kompany && (
                                    <span id="kompany-error" className={s.errorMessage}>
                                        {errors.kompany}
                                    </span>
                                )}
                            </div>
                        </div>

                       

                  

                        <label className={s.checkbox}>
                            <input
                                type="checkbox"
                                name="privacy_policy"
                                checked={formData.privacy_policy}
                                onChange={handleInputChange}
                                aria-invalid={!!errors.privacy}
                                aria-describedby={errors.privacy ? "privacy-error" : undefined}
                            />
                            <span>
                                Я ознакомился с {" "} 
                                <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
                                    Правилами обработки персональных данных
                                </a>
                            </span>
                        </label>
                        {errors.privacy && (
                            <span id="privacy-error" className={`${s.errorMessage} ${s.privacyError}`}>
                                {errors.privacy}
                            </span>
                        )}
                    </div>

                    <button 
                        type="submit" 
                        className={s.submitBtn}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "ОТПРАВКА..." : "ОТПРАВИТЬ"}
                    </button>
                </div>
            </form>
        </div>
    );
}