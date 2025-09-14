const gallery = document.getElementById('gallery')
const viewer = document.getElementById('viewer')
const viewerImg = document.getElementById('viewer-img')
const downloadBtn = document.getElementById('download')
const closeBtn = document.querySelector('.close')
const toggle = document.getElementById('toggle')
const search = document.getElementById('search')

document.body.addEventListener('click', e => {
  const card = e.target.closest('.card')
  if (card) openViewer(card.dataset.src, card.querySelector('figcaption').textContent)
})

closeBtn.addEventListener('click', closeViewer)
viewer.addEventListener('click', e => {
  if (e.target === viewer) closeViewer()
})

function openViewer(src, title){
  viewerImg.src = src
  downloadBtn.href = src
  downloadBtn.setAttribute('download', title.replace(/\s+/g,'-').toLowerCase() + '.jpg')
  viewer.style.display = 'flex'
}

function closeViewer(){
  viewer.style.display = 'none'
  viewerImg.src = ''
}

toggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark')
  if (document.documentElement.classList.contains('dark')) toggle.textContent = 'light'
  else toggle.textContent = 'dark'
})

search.addEventListener('input', () => {
  const q = search.value.trim().toLowerCase()
  Array.from(gallery.children).forEach(card => {
    const text = (card.querySelector('figcaption').textContent || '').toLowerCase()
    card.style.display = text.includes(q) ? '' : 'none'
  })
})
