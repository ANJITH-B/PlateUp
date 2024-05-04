import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export const ScrollManager = (props) => {
    const { section, onSectionChange } = props;

    const data = useScroll();
    const lastScroll = useRef(0);
    const isAnimating = useRef(false);
    
    data.fill.classList.add('top-0');
    data.fill.classList.add('absolute');

    useEffect(() => {
        gsap.to(data.el, {
            duration: 1,
            scrollTop: section * data.el.clientHeight,
            onStart: () => { isAnimating.current = true },
            onComplete: () => { isAnimating.current = false },
        });
    }, [section]);

    useFrame(() => {
        if (isAnimating.current) {
            lastScroll.current = data.scroll.current;
            return;
        }

        const curSection = Math.floor(data.scroll.current * data.pages);

        if (data.scroll.current > lastScroll.current) {
           
            if (section === 7 && curSection === 8) {
                onSectionChange(8);
            } else if (section === 6 && curSection === 7) {
                onSectionChange(7);
            } else if (section === 5 && curSection === 6) {
                onSectionChange(6);
                setTimeout(function() {
                    onSectionChange(7);
                }, 2500);
            } else if (section === 4 && curSection === 5) {
                onSectionChange(5);
            } else if (section === 3 && curSection === 4) {
                onSectionChange(4);
            } else if (section === 2 && curSection === 3) {
                onSectionChange(3);
            } else if (section === 1 && curSection === 2) {
                onSectionChange(2);
            } else if (section === 0) {
                onSectionChange(1);
            }
            lastScroll.current = data.scroll.current;
            return
        } 
        else if (data.scroll.current < lastScroll.current) {
            if (curSection === 1 && section === 2) {
                onSectionChange(1);
                
            } else if (curSection === 0 && section === 1) {
                onSectionChange(0);
            } else if (curSection === 2 && section === 3) {
                onSectionChange(2);
            } else if (curSection === 3 && section === 4) {
                onSectionChange(3);
            } else if (curSection === 4 && section === 5) {
                onSectionChange(4);
            } else if (curSection === 5 && section === 6) {
                onSectionChange(5);
            } else if (curSection === 6 && section === 7) {
                onSectionChange(6);
                setTimeout(function() {
                    onSectionChange(5);
                }, 2500);
            } else if (curSection === 7 && section === 8) {
                onSectionChange(7);
            }
        }
        lastScroll.current = data.scroll.current;

    });

    return null;
};
