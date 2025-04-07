import React from 'react';

const AboutUs = () => {
  const aboutContent = `
    <section class="mb-6">
      <h2 class="text-3xl font-semibold mb-4 text-gray-800">Our Story: Empowering Kebbi's Digital Future</h2>
      <p class="text-gray-700 mb-6">
        Kebbi Tech Hub was born from a vision to bridge the digital divide and unlock the immense potential of Kebbi State's youth. 
        We started as a small, passionate team, driven by the belief that technology can transform lives and drive economic growth. 
        Our journey is about fostering innovation, building a thriving tech ecosystem, and empowering the next generation of tech leaders in Kebbi.
      </p>
    </section>
    <section class="mb-8">
      <h2 class="text-3xl font-semibold mb-4 text-gray-800">Our Mission: Cultivating Tech Talent in Kebbi</h2>
      <p class="text-gray-700 mb-6">
        Our mission is to provide accessible and high-quality tech training, mentorship, and resources to the people of Kebbi. 
        We aim to create a space where ideas flourish, skills are honed, and opportunities are created. 
        By fostering collaboration and innovation, we strive to make Kebbi a hub for technological excellence.
      </p>
    </section>
    <section class="mb-8">
      <h2 class="text-3xl font-semibold mb-4 text-gray-800">Our Values: Building a Strong Tech Community</h2>
      <ul class="list-disc list-inside text-gray-700">
        <li class="mb-2">Community Collaboration</li>
        <li class="mb-2">Digital Inclusion</li>
        <li class="mb-2">Skill Development</li>
        <li class="mb-2">Innovation & Creativity</li>
        <li class="mb-2">Empowerment of Youth</li>
      </ul>
    </section>
    <section>
      <h2 class="text-3xl font-semibold mb-4 text-gray-800">Join the Kebbi Tech Revolution!</h2>
      <p class="text-gray-700">
        Whether you're a budding developer, a tech enthusiast, or a visionary entrepreneur, Kebbi Tech Hub welcomes you. 
        Join us in building a brighter, tech-driven future for Kebbi State.
      </p>
    </section>
  `;

  return (
    <div className="p-8 font-sans leading-relaxed">
      <div dangerouslySetInnerHTML={{ __html: aboutContent }} />
    </div>
  );
};

export default AboutUs;