const codePre = document.querySelectorAll('#content_views pre');
const codeArea = document.querySelectorAll('#content_views pre code');

const contentViews = document.querySelector('#content_views');
const contentChilds = contentViews.childNodes;

[...codePre, ...codeArea].forEach((item) => {
  item.style.userSelect = 'auto';
});

[...contentChilds].forEach((item) => {
  item.addEventListener('copy', (e) => {
    e.stopPropagation();
  });
});
