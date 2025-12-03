import { useEffect, useRef, useState } from "react";

type AnimationType = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale" | "fade";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (
  animation: AnimationType = "fade-up",
  options: UseScrollAnimationOptions = {}
) => {
  const { threshold = 0.1, rootMargin = "0px", triggerOnce = true } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  const animationClasses: Record<AnimationType, string> = {
    "fade-up": "translate-y-8 opacity-0",
    "fade-down": "-translate-y-8 opacity-0",
    "fade-left": "translate-x-8 opacity-0",
    "fade-right": "-translate-x-8 opacity-0",
    "scale": "scale-95 opacity-0",
    "fade": "opacity-0",
  };

  const baseClasses = "transition-all duration-700 ease-out";
  const hiddenClasses = animationClasses[animation];
  const visibleClasses = "translate-y-0 translate-x-0 scale-100 opacity-100";

  return {
    ref,
    className: `${baseClasses} ${isVisible ? visibleClasses : hiddenClasses}`,
    isVisible,
  };
};

// Component wrapper for easier usage
interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
  threshold?: number;
}

export const ScrollAnimation = ({
  children,
  animation = "fade-up",
  delay = 0,
  className = "",
  threshold = 0.1,
}: ScrollAnimationProps) => {
  const { ref, className: animationClass } = useScrollAnimation(animation, { threshold });

  return (
    <div
      ref={ref}
      className={`${animationClass} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
