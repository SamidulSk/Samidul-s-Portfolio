import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorOuterRef = useRef(null);
  const cursorInnerRef = useRef(null);
  const trailRefs = useRef([]);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    document.body.style.cursor = "none";
    
    // Create trail elements
    trailRefs.current = Array.from({ length: 12 }, (_, i) => {
      const trail = document.createElement('div');
      trail.className = `fixed top-0 left-0 rounded-full pointer-events-none`;
      trail.style.width = `${6 - i * 0.3}px`;
      trail.style.height = `${6 - i * 0.3}px`;
      trail.style.zIndex = '9998';
      trail.style.mixBlendMode = 'screen';
      document.body.appendChild(trail);
      return trail;
    });

    const handleMouseMove = (e) => {
      // Main cursor animations with enhanced easing
      gsap.to(cursorOuterRef.current, {
        x: e.clientX - 25,
        y: e.clientY - 25,
        duration: 0.6,
        ease: "elastic.out(1, 0.3)",
      });

      gsap.to(cursorInnerRef.current, {
        x: e.clientX - 8,
        y: e.clientY - 8,
        duration: 0.15,
        ease: "power3.out",
      });

      // Magnetic trail effect
      trailRefs.current.forEach((trail, index) => {
        gsap.to(trail, {
          x: e.clientX - (3 - index * 0.15),
          y: e.clientY - (3 - index * 0.15),
          duration: 0.3 + index * 0.05,
          ease: "power2.out",
          delay: index * 0.02,
        });
        
        // Dynamic trail colors
        const hue = (Date.now() / 10 + index * 30) % 360;
        trail.style.background = `hsl(${hue}, 70%, ${60 + index * 2}%)`;
        trail.style.opacity = (12 - index) / 20;
        trail.style.boxShadow = `0 0 ${6 + index}px hsla(${hue}, 70%, 60%, 0.6)`;
      });
    };

    const handleMouseEnter = (e) => {
      const target = e.target;
      const isInteractive = target.tagName === 'BUTTON' || 
                           target.tagName === 'A' || 
                           target.onclick ||
                           target.closest('button, a, [role="button"]') ||
                           window.getComputedStyle(target).cursor === 'pointer';
      
      if (isInteractive) {
        setIsHovering(true);
        
        // Outer cursor hover effect
        gsap.to(cursorOuterRef.current, {
          scale: 2.5,
          borderWidth: "3px",
          duration: 0.4,
          ease: "back.out(1.7)",
        });
        
        // Inner cursor hover effect
        gsap.to(cursorInnerRef.current, {
          scale: 0.5,
          duration: 0.3,
          ease: "power2.out",
        });

        // Trail explosion effect
        trailRefs.current.forEach((trail, index) => {
          gsap.to(trail, {
            scale: 2 + index * 0.1,
            duration: 0.4,
            ease: "back.out(1.7)",
            delay: index * 0.01,
          });
        });
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      
      gsap.to(cursorOuterRef.current, {
        scale: 1,
        borderWidth: "2px",
        duration: 0.4,
        ease: "power2.out",
      });
      
      gsap.to(cursorInnerRef.current, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });

      trailRefs.current.forEach((trail, index) => {
        gsap.to(trail, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
          delay: index * 0.01,
        });
      });
    };

    const handleMouseDown = () => {
      setIsClicking(true);
      
      // Click ripple effect
      gsap.to(cursorOuterRef.current, {
        scale: isHovering ? 3.5 : 1.8,
        duration: 0.2,
        ease: "power2.out",
      });
      
      gsap.to(cursorInnerRef.current, {
        scale: 0.3,
        duration: 0.1,
        ease: "power2.out",
      });

      // Trail burst effect
      trailRefs.current.forEach((trail, index) => {
        gsap.to(trail, {
          scale: 3 + index * 0.2,
          opacity: 0.8,
          duration: 0.2,
          ease: "power2.out",
        });
      });
    };

    const handleMouseUp = () => {
      setIsClicking(false);
      
      gsap.to(cursorOuterRef.current, {
        scale: isHovering ? 2.5 : 1,
        duration: 0.3,
        ease: "back.out(1.7)",
      });
      
      gsap.to(cursorInnerRef.current, {
        scale: isHovering ? 0.5 : 1,
        duration: 0.2,
        ease: "power2.out",
      });

      trailRefs.current.forEach((trail, index) => {
        gsap.to(trail, {
          scale: isHovering ? 2 + index * 0.1 : 1,
          opacity: (12 - index) / 20,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "default";
      
      // Cleanup trail elements
      trailRefs.current.forEach(trail => {
        if (trail && trail.parentNode) {
          trail.parentNode.removeChild(trail);
        }
      });
    };
  }, [isHovering]);

  return (
    <>
      {/* Outer cursor with enhanced effects */}
      <div
        ref={cursorOuterRef}
        className="fixed top-0 left-0 w-12 h-12 rounded-full pointer-events-none border-2 transition-all duration-300 z-[9999]"
        style={{
          background: `conic-gradient(from 0deg, 
            hsl(${(Date.now() / 20) % 360}, 70%, 60%), 
            hsl(${(Date.now() / 20 + 120) % 360}, 70%, 60%), 
            hsl(${(Date.now() / 20 + 240) % 360}, 70%, 60%), 
            hsl(${(Date.now() / 20) % 360}, 70%, 60%))`,
          borderColor: isHovering ? '#ff0080' : '#8b5cf6',
          boxShadow: `
            0 0 30px ${isHovering ? 'rgba(255, 0, 128, 0.6)' : 'rgba(139, 92, 246, 0.4)'},
            inset 0 0 20px rgba(255, 255, 255, 0.1),
            0 0 60px ${isClicking ? 'rgba(255, 255, 255, 0.8)' : 'rgba(139, 92, 246, 0.2)'}
          `,
          opacity: 0.8,
          filter: `blur(${isClicking ? '2px' : '0.5px'}) brightness(${isHovering ? '1.2' : '1'})`,
        }}
      />
      
      {/* Inner cursor with plasma effect */}
      <div
        ref={cursorInnerRef}
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[10000]"
        style={{
          background: `radial-gradient(circle at 30% 30%, 
            rgba(255, 255, 255, 0.9), 
            hsl(${(Date.now() / 15) % 360}, 80%, 70%), 
            hsl(${(Date.now() / 15 + 180) % 360}, 70%, 60%))`,
          boxShadow: `
            0 0 20px rgba(255, 255, 255, 0.8),
            0 0 40px ${isHovering ? 'rgba(255, 0, 128, 0.8)' : 'rgba(139, 92, 246, 0.6)'},
            inset 0 0 10px rgba(0, 0, 0, 0.2)
          `,
          border: '1px solid rgba(255, 255, 255, 0.3)',
          opacity: isClicking ? 0.9 : 0.95,
        }}
      />
      
      {/* Rotating accent ring */}
      <div
        className="fixed top-0 left-0 w-16 h-16 rounded-full pointer-events-none border border-white/20 z-[9998]"
        style={{
          left: 'var(--cursor-x, 0px)',
          top: 'var(--cursor-y, 0px)',
          transform: `translate(-32px, -32px) rotate(${(Date.now() / 30) % 360}deg) scale(${isHovering ? '1.5' : '1'})`,
          background: 'conic-gradient(from 0deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
          transition: 'transform 0.3s ease-out',
          opacity: isClicking ? 0.8 : 0.3,
        }}
      />
      
      <style jsx>{`
        :root {
          --cursor-x: ${cursorOuterRef.current?.style.transform?.match(/translateX\(([^)]+)\)/)?.[1] || '0px'};
          --cursor-y: ${cursorOuterRef.current?.style.transform?.match(/translateY\(([^)]+)\)/)?.[1] || '0px'};
        }
      `}</style>
    </>
  );
};

export default CustomCursor;