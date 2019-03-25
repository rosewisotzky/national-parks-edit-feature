const buildParkHtml = parkObject => {
  // <article>
  //  <h3>Park Name</h3>
  //  <p>State the park in located in</p>
  // </article>

  const parkArticle = buildElement(
    "article",
    `national-park--${parkObject.id}`
  );
  parkArticle.appendChild(buildElement("h3", undefined, parkObject.name));
  parkArticle.appendChild(buildElement("p", undefined, parkObject.state));

  if (parkObject.visited !== true) {
    let visitedParkButton = buildElement("button", undefined, "Visited Park");
    parkArticle.appendChild(visitedParkButton);
    visitedParkButton.addEventListener("click", handleVisited);
  }

  let editParkButton = buildElement("button", undefined, "Edit Park");
  parkArticle.appendChild(editParkButton);
  editParkButton.addEventListener("click", handleEdit);

  let deleteParkButton = buildElement("button", undefined, "Delete Park");
  parkArticle.appendChild(deleteParkButton);
  deleteParkButton.addEventListener("click", handleDelete);
  return parkArticle;
};

const parkEditForm = parkObject => {
  let editFormFragment = document.createDocumentFragment();

  editFormFragment.appendChild(buildElement("label", undefined, "Name: "));
  editFormFragment.appendChild(
    buildElement(
      "input",
      `edit-park-name--${parkObject.id}`,
      undefined,
      parkObject.name
    )
  );

  editFormFragment.appendChild(buildElement("label", undefined, "State: "));
  editFormFragment.appendChild(
    buildElement(
      "input",
      `edit-park-state--${parkObject.id}`,
      undefined,
      parkObject.state
    )
  );

  editFormFragment.appendChild(buildElement("label", undefined, "Latitude: "));
  editFormFragment.appendChild(
    buildElement(
      "input",
      `edit-park-lat--${parkObject.id}`,
      undefined,
      parkObject.latitude
    )
  );

  editFormFragment.appendChild(buildElement("label", undefined, "Longitude: "));
  editFormFragment.appendChild(
    buildElement("input", `edit-park-long--${parkObject.id}`),
    undefined,
    parkObject.longitude
  );

  editFormFragment.appendChild(buildElement("label", undefined, "Visited: "));
  let visitedTrueButton = document.createElement("input");
  visitedTrueButton.type = "radio";
  visitedTrueButton.label = "True";
  visitedTrueButton.name = `park-visited--${parkObject.id}`;
  visitedTrueButton.value = true;
  editFormFragment.appendChild(visitedTrueButton);

  let visitedFalseButton = document.createElement("input");
  visitedFalseButton.type = "radio";
  visitedFalseButton.label = "False"
  visitedFalseButton.name = `park-visited--${parkObject.id}`;
  visitedFalseButton.value = false;
  editFormFragment.appendChild(visitedFalseButton);

  const updateParkButton = buildElement("button", undefined, "Update");
  updateParkButton.addEventListener("click", handleUpdate);
  editFormFragment.appendChild(updateParkButton);

  return editFormFragment;
};
