// 页面切换函数
function showPage(pageId) {
    // 隐藏所有页面
    document.querySelectorAll('.container').forEach(page => {
        page.classList.add('hidden');
    });
    
    // 显示目标页面
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.remove('hidden');
        
        // 滚动到顶部
        window.scrollTo(0, 0);
        
        // 根据页面ID改变背景色
        if (pageId === 'page2') {
            document.body.style.backgroundColor = '#fff0f9';
        } else if (pageId === 'page3') {
            document.body.style.backgroundColor = '#f0f8ff';
        } else {
            document.body.style.backgroundColor = '#fff0f5';
        }
    }
}

// 返回功能
function goBack() {
    const currentPage = document.querySelector('.container:not(.hidden)').id;
    if (currentPage === 'page2' || currentPage === 'page3') {
        showPage('page1');
    } else if (currentPage === 'page4') {
        showPage('page2');
    }
}

// 初始化：确保只显示第一页
document.addEventListener('DOMContentLoaded', () => {
    showPage('page1');
    
    // 为第四页设置特殊背景色
    document.getElementById('page4').addEventListener('click', () => {
        document.body.style.backgroundColor = '#fff5f7';
    });
});
