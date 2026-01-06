// 在现有的showPage函数中添加跟踪
function showPage(pageId) {
    // 隐藏所有页面
    document.querySelectorAll('.container').forEach(page => {
        page.classList.add('hidden');
    });
    
    // 显示目标页面
    const targetPage = document.getElementById(pageId);
    targetPage.classList.remove('hidden');
    
    // 跟踪页面访问（如果添加了上面的代码）
    if (typeof trackPageView === 'function') {
        const pageTitle = targetPage.querySelector('h1')?.textContent || pageId;
        trackPageView(pageTitle);
    }
}

// 返回功能
function goBack() {
    const currentPage = document.querySelector('.container:not(.hidden)').id;
    if (currentPage === 'page2' || currentPage === 'page3') {
        showPage('page1');
    } else if (currentPage === 'page4') {
        showPage('page2');
    } else if (currentPage === 'page5') {
        showPage('page4');
    } else if (currentPage === 'page6') {
        showPage('page5');
    } else if (currentPage === 'page7') {
        showPage('page6');
    } else if (currentPage === 'page8') {
        showPage('page7');
    } else if (currentPage === 'page9') {
        showPage('page8');
    } else if (currentPage === 'page10') {
        showPage('page9');
    } else if (currentPage === 'page11') {
        showPage('page10');
    } else if (currentPage === 'page12') {
        showPage('page11');
    } else if (currentPage === 'page13') {
        showPage('page12');
    } else if (currentPage === 'page14') {
        showPage('page13');
    } else if (currentPage === 'page15') {
        showPage('page14');
    } else if (currentPage === 'page16') {
        showPage('page15');
    }
}

// 初始化：确保只显示第一页
document.addEventListener('DOMContentLoaded', () => {
    showPage('page1');
});








