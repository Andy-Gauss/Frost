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
    } else if (currentPage === 'page17') {
        showPage('page16');
    } else if (currentPage === 'page18') {
        showPage('page17');
    } else if (currentPage === 'page19') {
        showPage('page18');
    } else if (currentPage === 'page20') {
        showPage('page19');
    } else if (currentPage === 'page21') {
        showPage('page20');
    } else if (currentPage === 'page22') {
        showPage('page21');
    } else if (currentPage === 'page23') {
        showPage('page22');
    } else if (currentPage === 'page24') {
        showPage('page23');
    } else if (currentPage === 'page25') {
        showPage('page24');
    } else if (currentPage === 'page26') {
        showPage('page25');
    } else if (currentPage === 'page27') {
        showPage('page26');
    } else if (currentPage === 'page28') {
        showPage('page27');
    } else if (currentPage === 'page29') {
        showPage('page28');
    } else if (currentPage === 'page30') {
        showPage('page29');
    } else if (currentPage === 'page31') {
        showPage('page30');
    } else if (currentPage === 'page32') {
        showPage('page31');
    } else if (currentPage === 'page33') {
        showPage('page32');
    } else if (currentPage === 'page34') {
        showPage('page33');
    } else if (currentPage === 'page35') {
        showPage('page34');
    } else if (currentPage === 'page36') {
        showPage('page35');
    }
}

// 初始化：确保只显示第一页
document.addEventListener('DOMContentLoaded', () => {
    showPage('page1');
});
































