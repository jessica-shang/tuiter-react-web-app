const NavigationSidebar = () => {
  return(`
   <div class="list-group">
      <a href="#" class="list-group-item list-group-item-action">
        <i class="fab fa-twitter me-2"></i>
      </a>
      <a href="#" class="list-group-item list-group-item-action d-inline-flex align-items-center">
        <i class="fa-sharp fa-solid fa-house-chimney me-2"></i>
        <div class="d-none d-xl-block"> Home </div>
      </a>
      <a href="#" class="list-group-item list-group-item-action d-inline-flex align-items-center active">
        <i class="fa-solid fa-hashtag me-2"></i>
        <div class="d-none d-xl-block"> Explore </div>
      </a>
      <a href="#" class="list-group-item list-group-item-action d-inline-flex align-items-center">
        <i class="fa-solid fa-bell me-2"></i>
        <div class="d-none d-xl-block"> Notifications </div>
      </a>
      <a href="#" class="list-group-item list-group-item-action d-inline-flex align-items-center">
        <i class="fa-solid fa-envelope me-2"></i>
        <div class="d-none d-xl-block"> Messages </div>
      </a>
      <a href="#" class="list-group-item list-group-item-action d-inline-flex align-items-center">
        <i class="fa-solid fa-bookmark me-2"></i>
        <div class="d-none d-xl-block"> Bookmarks </div>
      </a>
      <a href="#" class="list-group-item list-group-item-action d-inline-flex align-items-center">
        <i class="fa-solid fa-list me-2"></i>
        <div class="d-none d-xl-block"> Lists </div>
      </a>
      <a href="#" class="list-group-item list-group-item-action d-inline-flex align-items-center">
        <i class="fa-solid fa-user me-2"></i>
        <div class="d-none d-xl-block"> Profile </div>
      </a>
      <a href="#" class="list-group-item list-group-item-action d-inline-flex align-items-center">
        <i class="fa-solid fa-plus me-2"></i>
        <div class="d-none d-xl-block"> More </div>
      </a>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tuit</a>
   </div>
 `);
}
export default NavigationSidebar;

