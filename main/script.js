<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>FuturaX - Redefining Luxury Tech</title>
  <link rel="stylesheet" href="./css/styles.css" />
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    .btn-animated {
      position: relative;
      overflow: hidden;
      transition: transform 0.3s ease;
    }
    .btn-animated::before {
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.1);
      transform: skewX(-20deg);
      transition: left 0.4s ease;
    }
    .btn-animated:hover::before {
      left: 100%;
    }
    .btn-animated:hover {
      transform: scale(1.1);
    }
  </style>
</head>
<body class="bg-black text-white">
  <nav class="flex justify-between items-center p-6 bg-gradient-to-r from-black to-gray-900 sticky top-0 z-50 shadow-md">
    <h1 class="text-3xl font-bold text-cyan-400">FuturaX</h1>
    <ul class="flex gap-6">
      <li><a href="index.html" class="hover:text-cyan-400">Home</a></li>
      <li><a href="features.html" class="hover:text-cyan-400">Features</a></li>
      <li><a href="viewer.html" class="hover:text-cyan-400">360 Viewer</a></li>
      <li><a href="customizer.html" class="hover:text-cyan-400">Customizer</a></li>
      <li><a href="contact.html" class="hover:text-cyan-400">Contact</a></li>
    </ul>
  </nav>

  <header class="text-center py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black" data-aos="zoom-in" data-aos-duration="1500">
    <h2 class="text-5xl md:text-6xl font-bold mb-4 text-cyan-400">Luxury Meets Intelligence</h2>
    <p class="text-xl md:text-2xl mb-8 text-gray-300">Introducing the next evolution of smart luxury devices.</p>
    <img src="assets/product.png" alt="FuturaX" class="mx-auto w-full max-w-md md:max-w-2xl mb-8" data-aos="fade-up" data-aos-delay="300" />
    <div class="space-x-4" data-aos="fade-up" data-aos-delay="500">
      <a href="buy.html" class="btn-animated px-6 py-3 bg-cyan-500 rounded-full hover:bg-cyan-600 transition duration-300 ease-in-out">Buy Now</a>
      <a href="preorder.html" class="btn-animated px-6 py-3 bg-gray-700 rounded-full hover:bg-gray-800 transition duration-300 ease-in-out">Pre-Order</a>
      <a href="learn.html" class="btn-animated px-6 py-3 bg-gray-700 rounded-full hover:bg-gray-800 transition duration-300 ease-in-out">Learn More</a>
    </div>
  </header>

  <section class="py-20 px-6 bg-black text-center" data-aos="fade-up" data-aos-delay="200">
    <h3 class="text-4xl font-semibold mb-6 text-cyan-300">Unmatched Intelligence</h3>
    <p class="max-w-3xl mx-auto text-lg mb-6 text-gray-400">Powered by a next-gen AI engine, FuturaX learns your preferences, adapts to your behavior, and seamlessly integrates into your lifestyle like never before.</p>
    <img src="assets/ai-chip.png" alt="AI Chip" class="mx-auto w-full max-w-lg rounded shadow-lg" />
  </section>

  <section class="py-20 px-6 bg-gradient-to-b from-gray-900 to-black text-center" data-aos="fade-up" data-aos-delay="400">
    <h3 class="text-4xl font-semibold mb-6 text-cyan-300">Sculpted in Perfection</h3>
    <p class="max-w-3xl mx-auto text-lg mb-6 text-gray-400">Crafted from aerospace-grade materials, the design is minimal, futuristic, and iconic. Elegance meets durability in one bold stroke.</p>
    <img src="assets/design-showcase.png" alt="Design Showcase" class="mx-auto w-full max-w-4xl rounded shadow-lg" />
  </section>

  <section class="py-20 px-6 bg-black text-center" data-aos="fade-up" data-aos-delay="600">
    <h3 class="text-4xl font-semibold mb-6 text-cyan-300">Total Immersion Experience</h3>
    <p class="max-w-3xl mx-auto text-lg mb-6 text-gray-400">Whether it's sound, display, or haptics — FuturaX surrounds you with seamless interaction and immersive response.</p>
    <a href="features.html" class="inline-block mt-6 px-6 py-3 border border-cyan-500 text-cyan-300 rounded-full hover:bg-cyan-600 hover:text-white transition">Explore Features</a>
  </section>

  <footer class="text-center py-6 border-t border-gray-800 bg-black" data-aos="fade-up">
    <p class="text-gray-500">&copy; 2025 FuturaX Inc. All rights reserved.</p>
  </footer>

  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
  <script>AOS.init();</script>
</body>
</html>