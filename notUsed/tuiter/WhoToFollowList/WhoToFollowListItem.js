const WhoToFollowListItem = ({avatarIcon, userName, handle}) => {
  return (`
    <li class="list-group-item position-relative">
      <div class="d-inline-flex align-items-center">
        <!-- Profile pic -->
        <img src=${avatarIcon}
             class="rounded-circle wd-pfp">

          <!-- Username & handle -->
          <div class="ms-3">
            <div>
              <b>${userName}</b>
              <i class="fa-solid fa-circle-check"></i>
            </div>
            ${handle}
          </div>
          <!-- Follow button -->
          <button type="submit" class="wd-follow-btn btn btn-primary rounded-pill position-absolute me-3">
            Follow
          </button>
      </div>
    </li>
  `);
}

export default WhoToFollowListItem;