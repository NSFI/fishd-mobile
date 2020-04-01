const langMap = {
  'en-US': {
    title: 'Fish - Mobile UI Components built on React',
    messages: {
      home: 'Home',
      component: 'Component',
      demo: 'Demo',
      search: 'Search in Fish Design'
    }
  },
  'zh-CN': {
    title: 'Fish - 轻量、可靠的移动端 React 组件库',
    messages: {
      home: '主页',
      component: '组件',
      demo: '演示环境',
      search: '在 Fish Design 中搜索'
    }
  }
};

let currentLang = '';

function getDefaultLang() {
  const langs = Object.keys(langMap);
  const { hash } = location;

  for (let i = 0; i < langs.length; i++) {
    if (hash.indexOf(langs[i]) !== -1) {
      return langs[i];
    }
  }

  const userLang = localStorage.getItem('FISH_LANGUAGE') || navigator.language || 'en-US';
  return userLang.indexOf('zh-') !== -1 ? 'zh-CN' : 'en-US';
}

export function setLang(lang) {
  if (currentLang === lang) {
    return;
  }

  currentLang = lang;
  if (window.localStorage) {
    localStorage.setItem('FISH_LANGUAGE', lang);
  }

  window.$lang = lang
  window.$messages = langMap[lang].messages

  document.title = langMap[lang].title;
}

setLang(getDefaultLang());
