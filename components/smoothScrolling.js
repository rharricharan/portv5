    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
        lerp: 0,  // Smoothing factor (0.1 is a nice smooth speed, but you can adjust this to make it slower)
        smoothWheel: true,  // Enable smooth scrolling with the mouse wheel
        smoothTouch: true,  // Enable smooth scrolling on touch devices
      });
  
      // Animation loop for Lenis to update scroll position
      function animate(time) {
        lenis.raf(time);
        requestAnimationFrame(animate);
      }
  
      requestAnimationFrame(animate);