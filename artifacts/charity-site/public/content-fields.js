/* Shared manifest of client-editable text fields.
   Used by index.html (to apply saved content) and admin.html (to build the editor).
   Each field: key, page (group label), label, sel (CSS selector(s) in the site), def (default text), ml (multiline). */
(function () {
  const L1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.';
  const L2 = L1 + ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
  const L3 = L2 + ' Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';

  const F = [];
  function add(page, key, label, sel, def, ml) { F.push({ page, key, label, sel, def, ml: !!ml }); }

  /* ---- Home ---- */
  add('Home', 'home.hero.title', 'Main headline', '#screen-home section:nth-of-type(1) .hero-box h1', 'Every child deserves the chance to succeed.');
  add('Home', 'home.hero.sub', 'Headline subtext', '#screen-home section:nth-of-type(1) .hero-box p', 'Closing the wealth gap in the Sunset Park community since 1982.', 1);
  add('Home', 'home.give.title', '"Support our work" heading', '#screen-home section:nth-of-type(2) .feature h2', 'Your gift makes a difference');
  add('Home', 'home.give.body', '"Support our work" paragraph', '#screen-home section:nth-of-type(2) .feature p', L2, 1);
  add('Home', 'home.path.title', '"Find your path" heading', '#screen-home section:nth-of-type(3) h2', 'How would you like to help?');
  add('Home', 'home.path.sub', '"Find your path" subtext', '#screen-home section:nth-of-type(3) p.lead', 'Guide visitors to the right next step.', 1);
  add('Home', 'home.challenge.title', '"The challenge" heading', '#screen-home section:nth-of-type(4) .feature h2', 'There is a wealth gap in the Sunset Park community');
  add('Home', 'home.challenge.body', '"The challenge" paragraph', '#screen-home section:nth-of-type(4) .feature p', L2, 1);
  add('Home', 'home.impact.title', 'Impact banner heading', '#screen-home section:nth-of-type(5) h2', 'CotC provides access to education resources for kids and families');
  add('Home', 'home.impact.stat1.n', 'Impact number 1', '#screen-home section:nth-of-type(5) .stat:nth-child(1) b', 'XX');
  add('Home', 'home.impact.stat1.l', 'Impact label 1', '#screen-home section:nth-of-type(5) .stat:nth-child(1) span', 'Kids served');
  add('Home', 'home.impact.stat2.n', 'Impact number 2', '#screen-home section:nth-of-type(5) .stat:nth-child(2) b', 'XX');
  add('Home', 'home.impact.stat2.l', 'Impact label 2', '#screen-home section:nth-of-type(5) .stat:nth-child(2) span', 'Went to college');
  add('Home', 'home.impact.stat3.n', 'Impact number 3', '#screen-home section:nth-of-type(5) .stat:nth-child(3) b', 'XX');
  add('Home', 'home.impact.stat3.l', 'Impact label 3', '#screen-home section:nth-of-type(5) .stat:nth-child(3) span', 'Workshops held');
  add('Home', 'home.ways.title', '"Get involved" heading', '#screen-home section:nth-of-type(6) h2', 'Three ways to make an impact');
  add('Home', 'home.ways.donate.body', 'Donate card text', '#screen-home section:nth-of-type(6) .pcard:nth-child(1) p', L1, 1);
  add('Home', 'home.ways.volunteer.body', 'Volunteer card text', '#screen-home section:nth-of-type(6) .pcard:nth-child(2) p', L1, 1);
  add('Home', 'home.ways.enroll.body', 'Enroll card text', '#screen-home section:nth-of-type(6) .pcard:nth-child(3) p', L1, 1);

  /* ---- About ---- */
  add('About', 'about.hero.title', 'Page title', '#screen-about section:nth-of-type(1) h1', 'About Children of the City');
  add('About', 'about.hero.sub', 'Page subtitle', '#screen-about section:nth-of-type(1) .hero-box p', 'Restating who we are and the community we serve.', 1);
  add('About', 'about.mission.title', '"Our mission" heading', '#screen-about section:nth-of-type(2) .feature h2', 'Closing the wealth gap, one child at a time');
  add('About', 'about.mission.body', '"Our mission" paragraph', '#screen-about section:nth-of-type(2) .feature p', L2, 1);
  add('About', 'about.who.title', '"Who we help" heading', '#screen-about section:nth-of-type(3) .feature h2', 'Serving the families of Sunset Park');
  add('About', 'about.who.body', '"Who we help" paragraph', '#screen-about section:nth-of-type(3) .feature p', L2, 1);
  add('About', 'about.how.title', '"How we work" heading', '#screen-about section:nth-of-type(4) h2', 'A high-level look at our approach');
  add('About', 'about.how.body', '"How we work" paragraph', '#screen-about section:nth-of-type(4) p.lead', L2, 1);
  add('About', 'story.founder.title', 'Our Story: founder heading', '#screen-about-story section:nth-of-type(2) .feature h2', 'A note from our founder');
  add('About', 'story.founder.body', 'Our Story: founder note', '#screen-about-story section:nth-of-type(2) .feature p', L3, 1);
  add('About', 'board.intro.title', 'Board & Team heading', '#screen-about-board section:nth-of-type(2) h2', 'Meet the team');
  add('About', 'board.intro.body', 'Board & Team intro', '#screen-about-board section:nth-of-type(2) p.lead', L1, 1);
  add('About', 'schools.intro.title', 'Schools heading', '#screen-about-schools section:nth-of-type(2) h2', 'Our schools');
  add('About', 'schools.intro.body', 'Schools intro', '#screen-about-schools section:nth-of-type(2) p.lead', L1, 1);
  add('About', 'partners.intro.title', 'Partners heading', '#screen-about-partners section:nth-of-type(2) h2', 'Our partners');
  add('About', 'partners.intro.body', 'Partners intro', '#screen-about-partners section:nth-of-type(2) p.lead', L1, 1);

  /* ---- Programs ---- */
  add('Programs', 'programs.hero.title', 'Page title', '#screen-programs section:nth-of-type(1) h1', 'Our Programs');
  add('Programs', 'programs.hero.sub', 'Page subtitle', '#screen-programs section:nth-of-type(1) .hero-box p', 'Education, mentorship, and support for kids and families.', 1);
  add('Programs', 'programs.intro.title', 'Intro heading', '#screen-programs section:nth-of-type(2) h2', 'Programs built around the community');
  add('Programs', 'programs.intro.body', 'Intro paragraph', '#screen-programs section:nth-of-type(2) p.lead', L2, 1);
  const progs = [
    ['prog-create', 1, 'Create Success', 'After school and summer programs for grades 1-12'],
    ['prog-college', 2, 'College Bound', 'College prep for high school students'],
    ['prog-future', 3, 'Future Safe', 'Food and supplies for households in the community'],
    ['prog-smash', 4, 'SMASH', 'Workshops, mentorship, and advocacy for parents and caretakers'],
  ];
  progs.forEach(function (p) {
    const id = p[0], i = p[1], name = p[2], tag = p[3];
    add('Programs', id + '.name', name + ': program name',
      '#screen-programs section:nth-of-type(3) .pcard:nth-child(' + i + ') h3, #screen-' + id + ' section:nth-of-type(1) h1, #screen-prog-enroll section:nth-of-type(3) .pcard:nth-child(' + i + ') h3', name);
    add('Programs', id + '.tagline', name + ': short description',
      '#screen-programs section:nth-of-type(3) .pcard:nth-child(' + i + ') p, #screen-' + id + ' section:nth-of-type(1) .hero-box p', tag, 1);
    add('Programs', id + '.overview', name + ': program overview',
      '#screen-' + id + ' section:nth-of-type(2) .feature p', L3, 1);
    add('Programs', id + '.eligibility', name + ': eligibility text',
      '#screen-' + id + ' section:nth-of-type(3) p.lead', L2, 1);
  });

  /* ---- Get Involved ---- */
  add('Get Involved', 'gi.hero.title', 'Main headline', '#screen-getinvolved section:nth-of-type(1) .hero-box h1', 'Join the movement');
  add('Get Involved', 'gi.hero.sub', 'Headline subtext', '#screen-getinvolved section:nth-of-type(1) .hero-box p', 'Volunteer your time or bring an event to life.', 1);
  add('Get Involved', 'gi.ways.title', '"Ways to help" heading', '#screen-getinvolved section:nth-of-type(2) h2', 'Find the right fit');
  add('Get Involved', 'gi.volunteer.body', 'Volunteer card text', '#screen-getinvolved section:nth-of-type(2) .pcard:nth-child(1) p', L2, 1);
  add('Get Involved', 'gi.events.body', 'Events card text', '#screen-getinvolved section:nth-of-type(2) .pcard:nth-child(2) p', L2, 1);
  add('Get Involved', 'vol.hero.sub', 'Volunteer page subtitle', '#screen-gi-volunteer section:nth-of-type(1) .hero-box p', 'Give your time. Change a life.', 1);
  add('Get Involved', 'vol.why.title', '"Why volunteer" heading', '#screen-gi-volunteer section:nth-of-type(2) .feature h2', 'Be part of the work');
  add('Get Involved', 'vol.why.body', '"Why volunteer" paragraph', '#screen-gi-volunteer section:nth-of-type(2) .feature p', L2, 1);
  add('Get Involved', 'events.hero.sub', 'Events page subtitle', '#screen-gi-events section:nth-of-type(1) .hero-box p', 'Bringing the community together.', 1);

  /* ---- Donate ---- */
  add('Donate', 'donate.hero.title', 'Main headline', '#screen-donate section:nth-of-type(1) .hero-box h1', 'Every gift makes a difference');
  add('Donate', 'donate.hero.sub', 'Headline subtext', '#screen-donate section:nth-of-type(1) .hero-box p', 'Your donation opens doors for kids in Sunset Park.', 1);
  add('Donate', 'donate.ways.title', '"More ways to give" heading', '#screen-donate section:nth-of-type(2) .feature h2', 'Mail a check, give stock, or set up employer matching');
  add('Donate', 'donate.ways.body', '"More ways to give" paragraph', '#screen-donate section:nth-of-type(2) .feature p', L2, 1);
  add('Donate', 'donate.impact.title', 'Impact banner heading', '#screen-donate section:nth-of-type(3) h2', 'When you give, XX% of your donation goes to XX');

  /* ---- Footer ---- */
  add('Footer', 'footer.blurb', 'Footer mission blurb', 'footer.site .fbrand p', 'Closing the wealth gap in the Sunset Park community since 1982.', 1);
  add('Footer', 'footer.contact.address', 'Address', 'footer.site .footbar div:nth-child(1) p:nth-of-type(1)', 'Address placeholder');
  add('Footer', 'footer.contact.email', 'Email', 'footer.site .footbar div:nth-child(1) p:nth-of-type(2)', 'Email placeholder');
  add('Footer', 'footer.contact.phone', 'Phone', 'footer.site .footbar div:nth-child(1) p:nth-of-type(3)', 'Phone placeholder');

  window.CONTENT_FIELDS = F;
})();
