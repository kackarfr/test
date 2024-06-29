const hero = document.querySelector('.hero')

/**
 * Generate hover effect to display/hide [service] mega-menu
 */
const link_service = document.querySelector('#link-services')
const mega_menu_service = document.querySelector('.mega-menu--services')

link_service.addEventListener('mouseover', () => {
    mega_menu_service.style.visibility = 'visible'
    mega_menu_service.style.height = '200px'
    hero.style.filter = 'blur(3px)'
})
link_service.addEventListener('mouseleave', () => {
    mega_menu_service.style.visibility = 'hidden'
    mega_menu_service.style.height = '0'
    hero.style.filter = 'none'
})


/**
 * Generate hover effect to display/hide [development] mega-menu
 */
const link_development = document.querySelector('#link-dev')
const mega_menu_development = document.querySelector('.mega-menu--dev')

link_development.addEventListener('mouseover', () => {
    mega_menu_development.style.visibility = 'visible'
    mega_menu_development.style.height = '200px'
    hero.style.filter = 'blur(3px)'
})
link_development.addEventListener('mouseleave', () => {
    mega_menu_development.style.visibility = 'hidden'
    mega_menu_development.style.height = '0'
    hero.style.filter = 'none'
})


/**
 * Generate hover effect to display/hide [training] mega-menu
 */
const link_training = document.querySelector('#link-training')
const mega_menu_training = document.querySelector('.mega-menu--training')

link_training.addEventListener('mouseover', () => {
    mega_menu_training.style.visibility = 'visible'
    mega_menu_training.style.height = '200px'
    hero.style.filter = 'blur(3px)'
})
link_training.addEventListener('mouseleave', () => {
    mega_menu_training.style.visibility = 'hidden'
    mega_menu_training.style.height = '0'
    hero.style.filter = 'none'
})

/**
 * Generate hover effect to display/hide [databases] mega-menu
 */
const link_databases = document.querySelector('#link-db')
const mega_menu_databases = document.querySelector('.mega-menu--databases')

link_databases.addEventListener('mouseover', () => {
    mega_menu_databases.style.visibility = 'visible'
    mega_menu_databases.style.height = '200px'
    hero.style.filter = 'blur(3px)'
})
link_databases.addEventListener('mouseleave', () => {
    mega_menu_databases.style.visibility = 'hidden'
    mega_menu_databases.style.height = '0'
    hero.style.filter = 'none'
})


/**
 * Generate hover effect to display/hide [cloud-datacenter] mega-menu
 */
const link_cloud = document.querySelector('#link-cloud')
const mega_menu_cloud = document.querySelector('.mega-menu--cloud')

link_cloud.addEventListener('mouseover', () => {
    mega_menu_cloud.style.visibility = 'visible'
    mega_menu_cloud.style.height = '200px'
    hero.style.filter = 'blur(3px)'
})
link_cloud.addEventListener('mouseleave', () => {
    mega_menu_cloud.style.visibility = 'hidden'
    mega_menu_cloud.style.height = '0'
    hero.style.filter = 'none'
})

const btnMoveToTop = document.querySelector("#btn-move-to-top")
btnMoveToTop.onclick = () => document.documentElement.scrollTop = 0
