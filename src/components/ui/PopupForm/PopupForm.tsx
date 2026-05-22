// PopupForm.tsx
import React, { useEffect, useRef, useState, useCallback } from 'react';
import styles from './PopupForm.module.css';
import Link from 'next/link';

interface PopupFormProps {
    id?: string;
    defaultTitle?: string;
    endpoint?: string;
}

const PopupForm: React.FC<PopupFormProps> = ({
    id = "popup-form",
    defaultTitle = "Бесплатный аудит",
    endpoint = "/api/send-form"
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        privacy_policy: false
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [showThankYou, setShowThankYou] = useState(false);
    const [popupTitle, setPopupTitle] = useState(defaultTitle);

    const overlayRef = useRef<HTMLDivElement>(null);
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
                invalid: "Введите корректный email",
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
        if (!value) return { valid: true };
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
            return { valid: false, error: getErrorMessage("email", "invalid") };
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
        if (digits.length >= 7) formatted += "-" + digits.slice(7, 9);
        if (digits.length >= 9) formatted += "-" + digits.slice(9, 11);

        return formatted;
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formatted = formatPhone(e.target.value);
        setFormData({ ...formData, phone: formatted });
        if (errors.phone) {
            setErrors({ ...errors, phone: '' });
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });

        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
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
        newErrors.privacy = validateField('privacy_policy', formData.privacy_policy);

        setErrors(newErrors);

        return !Object.values(newErrors).some(error => error);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);

        try {
            const controller = new AbortController();
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    phone: formData.phone,
                    email: formData.email,
                    message: formData.service,
                    topic: defaultTitle,
                }),
                signal: controller.signal
            });

            if (!response.ok) throw new Error("Ошибка отправки");

            setShowThankYou(true);

            setTimeout(() => {
                closePopup();
                setShowThankYou(false);
            }, 2000);
        } catch (error) {
            alert("Ошибка отправки. Попробуйте позже");
        } finally {
            setIsSubmitting(false);
        }
    };

    const resetForm = () => {
        setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            privacy_policy: false
        });
        setErrors({});
        setPopupTitle(defaultTitle);
    };

    const openPopup = useCallback((title?: string, service?: string) => {
        if (title) {
            setPopupTitle(title);
        }
        if (service) {
            setFormData(prev => ({ ...prev, service }));
        }
        setIsOpen(true);
    }, []);

    const closePopup = useCallback(() => {
        setIsOpen(false);
        resetForm();
    }, [defaultTitle]);

    // Handle escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                closePopup();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, closePopup]);

    // Handle body scroll
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    // Focus on name input when opened
    useEffect(() => {
        if (isOpen && nameInputRef.current) {
            setTimeout(() => nameInputRef.current?.focus(), 300);
        }
    }, [isOpen]);

    // Global event listeners
    useEffect(() => {
        const handleOpenPopup = (e: CustomEvent) => {
            const { title, service } = e.detail || {};
            openPopup(title, service);
        };

        const handleClickTrigger = (e: MouseEvent) => {
            const trigger = (e.target as HTMLElement).closest('[data-popup]') as HTMLElement;
            if (!trigger) return;

            const title = trigger.dataset.popupTitle || trigger.getAttribute('title') || '';
            const service = trigger.dataset.popupService || '';

            openPopup(title, service);
        };

        document.addEventListener('open-popup', handleOpenPopup as EventListener);
        document.addEventListener('click', handleClickTrigger);

        return () => {
            document.removeEventListener('open-popup', handleOpenPopup as EventListener);
            document.removeEventListener('click', handleClickTrigger);
        };
    }, [openPopup]);

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === overlayRef.current) {
            closePopup();
        }
    };

    if (!isOpen) return null;

    return (
        <div
            ref={overlayRef}
            id={id}
            className={`${styles.popupOverlay} ${isOpen ? styles.active : ''}`}
            role="dialog"
            aria-modal="true"
            aria-hidden={!isOpen}
            onClick={handleOverlayClick}
        >
            <div className={styles.popupContainer}>
                <button
                    className={styles.popupClose}
                    onClick={closePopup}
                    aria-label="Закрыть окно"
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M18 6L6 18M6 6l12 12"></path>
                    </svg>
                </button>

                <div className={styles.formCard}>
                    {!showThankYou ? (
                        <>
                            <h2 className={styles.title}>{popupTitle}</h2>

                            <form onSubmit={handleSubmit} className={styles.form}>
                                <div className={styles.inputWrapper}>
                                    <input
                                        ref={nameInputRef}
                                        type="text"
                                        name="name"
                                        placeholder="Ваше имя"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className={errors.name ? styles.error : ''}
                                    />
                                    <span className={styles.errorMessage}>{errors.name}</span>
                                </div>

                                <div className={styles.inputWrapper}>
                                    <input
                                        ref={emailInputRef}
                                        type="email"
                                        name="email"
                                        placeholder="E-mail"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={errors.email ? styles.error : ''}
                                    />
                                    <span className={styles.errorMessage}>{errors.email}</span>
                                </div>

                                <div className={styles.inputWrapper}>
                                    <input
                                        ref={phoneInputRef}
                                        type="tel"
                                        name="phone"
                                        placeholder="+7 (___) ___-__-__"
                                        required
                                        value={formData.phone}
                                        onChange={handlePhoneChange}
                                        className={errors.phone ? styles.error : ''}
                                    />
                                    <span className={styles.errorMessage}>{errors.phone}</span>
                                </div>

                                <textarea
                                    name="service"
                                    placeholder="Комментарий к обращению"
                                    value={formData.service}
                                    onChange={handleInputChange}
                                ></textarea>
                                <label className={styles.checkbox}>
                                    <input
                                        type="checkbox"
                                        name="privacy_policy"
                                        checked={formData.privacy_policy}
                                        onChange={handleInputChange}
                                    />
                                    <span>
                                        Я ознакомлен(а) с{" "}
                                        <Link onClick={closePopup} href="/soglasie-obrabotka-pers-dannih">Правилами обработки персональных данных</Link>
                                    </span>
                                </label>
                                <button type="submit" disabled={isSubmitting}>
                                    {isSubmitting ? "Отправка..." : "ОТПРАВИТЬ"}
                                </button>


                                <span className={`${styles.errorMessage} ${styles.privacyError}`}>
                                    {errors.privacy}
                                </span>
                            </form>
                        </>
                    ) : (
                        <div className={styles.thankYou}>
                            <div className={styles.thankYouIcon}>✅</div>
                            <h2>Спасибо за заявку!</h2>
                            <p>Мы свяжемся с вами в ближайшее время</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PopupForm;