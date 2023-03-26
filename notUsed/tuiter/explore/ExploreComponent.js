import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return(`
    <!-- Top bar -->
    <div class="row align-items-center mb-2 ">
      <!-- Search field -->
      <div class="d-inline-flex align-items-center">
        <!-- Magnifying class icon -->
        <i class="fa-solid fa-magnifying-glass position-absolute" id="wd-magnifying-glass"></i>
        <!-- Search input -->
        <input type="text" class="form-control rounded-pill ps-5" placeholder="Search Tuiter"/>
        <!-- Gear icon -->
        <a href="#"><i class="fa-solid fa-gear fa-2x ms-3" style="color: #0d6efd"></i></a>
      </div>
    </div>

    <!-- Navigation tabs -->
    <ul class="nav nav-tabs mb-2">
      <li class="nav-item">
        <a class="nav-link active" href="for-you.html">For you</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="trending.html">Trending</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="news.html">News</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="sports.html">Sports</a>
      </li>
      <li class="nav-item">
        <a class="nav-link d-none d-md-block" href="entertainment.html">Entertainment</a>
      </li>
    </ul>

    <!-- Large center image -->
    <div class="position-relative">
      <img src="../../images/starship.jpg"
           class="card-img-top" alt="Starship">
      <h2 class="position-absolute text-white ps-3" id="wd-img-caption">SpaceX's Starship</h2>
    </div>
    ${PostSummaryList()}
  `);
}
export default ExploreComponent;
