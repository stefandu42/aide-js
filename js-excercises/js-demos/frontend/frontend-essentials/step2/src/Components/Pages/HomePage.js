/**
 * Render a view of the Home Page into the #page div
 * At this step: this is only a static component...
 */

const HomePage = () => {
  // reset #page div
  const pageDiv = document.querySelector("#page");
  pageDiv.innerHTML = `<h3 class="text-white pt-5">C'est ici que nous allons afficher le menu des pizzas (prochaines étapes)</h3>`;
};

export default HomePage;
