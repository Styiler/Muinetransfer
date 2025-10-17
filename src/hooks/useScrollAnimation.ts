import { useState, useEffect, useRef } from 'react';

interface UseScrollAnimationOptions {
    threshold?: number;
    triggerOnce?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
    const { threshold = 0.1, triggerOnce = false } = options;
    const [isInView, setIsInView] = useState(false);
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
            setIsInView(true);
            return;
        }

        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
                if (triggerOnce && entry.isIntersecting) {
                    observer.unobserve(element);
                }
            },
            {
                threshold,
            }
        );

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [threshold, triggerOnce]);

    return { ref, isInView };
};
