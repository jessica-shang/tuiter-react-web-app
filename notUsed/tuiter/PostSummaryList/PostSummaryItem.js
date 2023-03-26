const PostSummaryItem = ({topic, userName, time, title, image, tweets}) => {
  return (`
    <li class="list-group-item">
      <div class="row gx-0 gx-xxl-3 align-items-center">
        <div class="col">
          <span class="text-muted">${userName}</span>
          <div>
            <b>${topic}</b>
            <i class="fa-solid fa-circle-check"></i>
            <span class="text-muted"> - ${time}</span>
          </div>
          <b>${title}</b>
          <div class="text-muted">${tweets}</div>
        </div>
        <img src=${image} class="col-2 rounded">
      </div>
    </li>
  `);
}

export default PostSummaryItem;