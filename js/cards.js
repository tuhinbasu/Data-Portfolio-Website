function renderProjectCard(project) {
  return (
    '<a class="card" href="project.html?slug=' + project.slug + '">' +
      '<div class="thumb"><img src="' + project.image + '" alt="' + project.title + ' dashboard preview" loading="lazy"></div>' +
      '<div class="body">' +
        '<h3>' + project.title + '</h3>' +
        '<p>' + project.description + '</p>' +
        '<p class="tools">' + project.tools.join(', ') + '</p>' +
        '<span class="view">View project</span>' +
      '</div>' +
    '</a>'
  )
}
