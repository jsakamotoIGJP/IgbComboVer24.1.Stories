var currScript=document.currentScript,entryScript=document.createElement("script");entryScript.async=!1,currScript.src.indexOf("?bustv2=")>=0||window.__igLibraryLoad?(window.__igEntryBundle=entryScript,window.__igSkipCacheBust?entryScript.src=currScript.src.replace(/app.bootstrap.js/,"app.d25a8f2bf14dee1e1611.bundle.js"):entryScript.src=currScript.src.replace(/app\.bootstrap\.js\?bustv2=.*/,"app.d25a8f2bf14dee1e1611.bundle.js"),currScript.after(entryScript)):(window.__igSkipCacheBust?entryScript.src=currScript.src.replace(/app.bootstrap.js/,"app.d25a8f2bf14dee1e1611.bundle.js"):entryScript.src=currScript.src.replace(/app\.bootstrap\.js\?bust=.*/,"app.d25a8f2bf14dee1e1611.bundle.js"),document.write(entryScript.outerHTML));