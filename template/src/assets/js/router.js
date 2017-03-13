// 页面路由函数集，支持vue-router和原生url

/***
 * 页面跳转
 * @param url
 * @param $router
 * @param isReplace
 */
export function go(url, $router = null, isReplace = false) {
  if (/^javas/.test(url) || !url) {
    return;
  }

  let useRouter = typeof url === 'object' || ($router && typeof url === 'string' && !/http/.test(url))
  if (useRouter) {
    if (!isReplace) {
      $router.push(url);
    } else {
      $router.replace(url);
    }
  } else {
    if (!isReplace) {
      window.location.href = url;
    } else {
      window.location.replace(url);
    }

  }
}

/***
 * 获取当前URL
 * @param url
 * @param $router
 * @returns string
 */
export function getUrl(url, $router) {
  // Make sure the href is right in hash mode
  if ($router && !$router._history && typeof url === 'string' && !/http/.test(url)) {
    return `#!${url}`
  }
  return url && typeof url !== 'object' ? url : 'javascript:void(0);'
}
