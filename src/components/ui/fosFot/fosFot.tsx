"use client";

import React, { useState } from "react";
import s from "./fosFot.module.scss";

interface FormData {
    name: string;
    phone: string;
    email: string;
    comment: string;
    date: string;
    time: string;
}

export default function FosFot(): React.JSX.Element {
    const [phone, setPhone] = useState<string>("");
    const [formData, setFormData] = useState<FormData>({
        name: "",
        phone: "",
        email: "",
        comment: "",
        date: "",
        time: ""
    });

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        let value = e.target.value.replace(/\D/g, "");
        if (value.length > 11) value = value.slice(0, 11);
        
        let formattedValue = "+7";
        if (value.length > 1) {
            formattedValue += " (" + value.slice(1, 4);
        }
        if (value.length >= 5) {
            formattedValue += ") " + value.slice(4, 7);
        }
        if (value.length >= 8) {
            formattedValue += "." + value.slice(7, 9);
        }
        if (value.length >= 10) {
            formattedValue += "." + value.slice(9, 11);
        }
        
        setPhone(formattedValue);
        setFormData(prev => ({ ...prev, phone: formattedValue }));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Здесь отправка на сервер
    };

    return ( 
        <div className={s.body}>
            <h3 className={s.title}>
                Заполните, пожалуйста, контактную <br />
                форму и кажите удобное время для связи
            </h3>

            <form className={s.form} onSubmit={handleSubmit}>
                <div className={s.osnova}>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Ваше имя" 
                        className={s.input} 
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                    
                    <input 
                        type="tel" 
                        name="phone" 
                        placeholder="+7 (___) ___.__.__" 
                        className={s.input}
                        value={phone}
                        onChange={handlePhoneChange}
                        required
                    />
                    
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="E-mail" 
                        className={s.input}
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                    
                    <textarea 
                        name="comment" 
                        placeholder="Комментарий" 
                        className={`${s.input} ${s.textarea}`}
                        rows={4}
                        value={formData.comment}
                        onChange={handleInputChange}
                    ></textarea>
                    
                    <button type="submit" className={s.submitBtn}>
                        ОТПРАВИТЬ
                    </button>
                    
                    <p className={s.agreement}>
                        Нажимая кнопку "Отправить", Вы подтверждаете что ознакомились с <a href="">Правилами обработки персональных данных</a>
                    </p>
                </div>
                <div className={s.osnova}>
                     <input 
                        type="date" 
                        name="date" 
                        placeholder="_ _-_ _-_____"
                        className={s.input}
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                    />
                     <input 
                        type="time" 
                        name="time" 
                        className={s.input}
                        value={formData.time}
                        onChange={handleInputChange}
                        required
                    />
                </div>
            </form>
        </div>  
    );
}