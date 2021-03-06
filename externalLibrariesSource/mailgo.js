"use strict";
var V = "0.6.9",
  MAILTO = "mailto:",
  mailgoCSS = document.createElement("style");
(mailgoCSS.id = "mailgo-style"), (mailgoCSS.type = "text/css");
var mailgoCSSContent = document.createTextNode(
  '.mailgo-modal{position:fixed;top:0;right:0;bottom:0;left:0;justify-content:center;align-items:center;flex-direction:column;overflow:hidden;font-size:15px;z-index:10000}.mailgo-modal a,.mailgo-modal p,.mailgo-modal span,.mailgo-modal strong{margin:0;padding:0;font-size:100%;line-height:1;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"}.mailgo-modal strong{font-weight:700}.mailgo-modal .mailgo-modal-background{position:absolute;z-index:10001;top:0;right:0;bottom:0;left:0;background-color:rgba(32,35,42,.75);opacity:.8}.mailgo-modal .mailgo-modal-content{position:relative;z-index:10002;box-sizing:content-box;text-align:center;min-width:200px;max-width:240px;background-color:#fff;opacity:.97;border-radius:5px;box-shadow:0 3px 8px 0 rgba(32,35,42,.12);color:#4a4a4a;display:block;overflow:auto;padding:20px}.mailgo-modal .mailgo-modal-content:hover{opacity:1;box-shadow:0 18px 30px 0 rgba(32,35,42,.23)}.mailgo-modal .mailgo-modal-content .mailgo-title{display:block;margin-bottom:5px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.mailgo-modal .mailgo-modal-content .mailgo-details{margin-bottom:10px}.mailgo-modal .mailgo-modal-content .mailgo-details p{font-size:12px;margin-top:3px;margin-bottom:3px}.mailgo-modal .mailgo-modal-content a{display:block;padding:10px;color:#4a4a4a;border-radius:5px;text-decoration:none}.mailgo-modal .mailgo-modal-content a.mailgo-gmail{color:#d44638}.mailgo-modal .mailgo-modal-content a.mailgo-outlook{color:#0072c6}.mailgo-modal .mailgo-modal-content a.mailgo-copy{padding:16px 10px;font-size:16px}.mailgo-modal .mailgo-modal-content a.mailgo-copy:hover,.mailgo-modal .mailgo-modal-content a.mailgo-default:hover{background-color:rgba(0,0,0,.08);color:#4a4a4a}.mailgo-modal .mailgo-modal-content a.mailgo-outlook:hover{background-color:rgba(0,114,198,.08);color:#0072c6}.mailgo-modal .mailgo-modal-content a.mailgo-gmail:hover{background-color:rgba(212,70,56,.08);color:#d44638}.mailgo-modal .mailgo-modal-content a.mailgo-by{display:block;font-size:8px;margin-top:1rem;padding:0;color:#4a4a4a;opacity:.5}.mailgo-modal .mailgo-modal-content a.mailgo-by:hover{opacity:1}.mailgo-modal .mailgo-modal-content .mailgo-weight-500{font-weight:500}'
);
mailgoCSS.appendChild(mailgoCSSContent), document.head.appendChild(mailgoCSS);
var mailgoInit = function() {
    var e = document.createElement("div");
    (e.id = "mailgo"),
      e.classList.add("mailgo-modal"),
      (e.style.display = "none");
    var a = document.createElement("div");
    (a.className = "mailgo-modal-background"), e.appendChild(a);
    var o = document.createElement("div");
    (o.className = "mailgo-modal-content"), e.appendChild(o);
    var t = document.createElement("strong");
    (t.id = "mailgo-title"), (t.className = "mailgo-title"), o.appendChild(t);
    var i = document.createElement("div");
    (i.id = "mailgo-details"), (i.className = "mailgo-details");
    var l = document.createElement("p");
    l.id = "mailgo-cc";
    var n = document.createElement("span");
    n.className = "mailgo-weight-500";
    var d = document.createTextNode("cc ");
    n.appendChild(d);
    var m = document.createElement("span");
    (m.id = "mailgo-cc-value"),
      l.appendChild(n),
      l.appendChild(m),
      i.appendChild(l);
    var c = document.createElement("p");
    c.id = "mailgo-bcc";
    var r = document.createElement("span");
    r.className = "mailgo-weight-500";
    var g = document.createTextNode("bcc ");
    r.appendChild(g);
    var s = document.createElement("span");
    (s.id = "mailgo-bcc-value"),
      c.appendChild(r),
      c.appendChild(s),
      i.appendChild(c);
    var p = document.createElement("p");
    p.id = "mailgo-subject";
    var u = document.createElement("span");
    u.className = "mailgo-weight-500";
    var h = document.createTextNode("subject ");
    u.appendChild(h);
    var v = document.createElement("span");
    (v.id = "mailgo-subject-value"),
      p.appendChild(u),
      p.appendChild(v),
      i.appendChild(p);
    var b = document.createElement("p");
    b.id = "mailgo-body";
    var f = document.createElement("span");
    f.className = "mailgo-weight-500";
    var y = document.createTextNode("body ");
    f.appendChild(y);
    var C = document.createElement("span");
    (C.id = "mailgo-body-value"),
      b.appendChild(f),
      b.appendChild(C),
      i.appendChild(b),
      o.appendChild(i);
    var E = document.createElement("a");
    (E.id = "mailgo-gmail"),
      (E.href = "#mailgo-gmail"),
      E.classList.add("mailgo-open"),
      E.classList.add("mailgo-gmail");
    var x = document.createTextNode("open in ");
    E.appendChild(x);
    var k = document.createElement("span");
    k.className = "mailgo-weight-500";
    var w = document.createTextNode("Gmail");
    k.appendChild(w), E.appendChild(k), o.appendChild(E);
    var L = document.createElement("a");
    (L.id = "mailgo-outlook"),
      (L.href = "#mailgo-outlook"),
      L.classList.add("mailgo-open"),
      L.classList.add("mailgo-outlook");
    var T = document.createTextNode("open in ");
    L.appendChild(T);
    var N = document.createElement("span");
    N.className = "mailgo-weight-500";
    var S = document.createTextNode("Outlook");
    N.appendChild(S), L.appendChild(N), o.appendChild(L);
    var A = document.createElement("a");
    (A.id = "mailgo-open"),
      (A.href = "#mailgo-open"),
      A.classList.add("mailgo-open"),
      A.classList.add("mailgo-default");
    var I = document.createElement("span");
    I.className = "mailgo-weight-500";
    var M = document.createTextNode("open");
    I.appendChild(M);
    var j = document.createTextNode(" default");
    A.appendChild(I), A.appendChild(j), o.appendChild(A);
    var R = document.createElement("a");
    (R.id = "mailgo-copy"),
      (R.href = "#mailgo-copy"),
      R.classList.add("mailgo-copy"),
      R.classList.add("mailgo-weight-500");
    var U = document.createTextNode("copy");
    R.appendChild(U), o.appendChild(R);
    var z = document.createElement("a");
    (z.href = "https://mailgo.js.org?ref=mailgo-modal"),
      (z.className = "mailgo-by"),
      (z.target = "_blank"),
      (z.rel = "noopener noreferrer");
    var O = document.createTextNode("mailgo.js.org");
    z.appendChild(O),
      o.appendChild(z),
      document.body.appendChild(e),
      a.addEventListener("click", hideMailgo);
  },
  mailgoRender = function(e) {
    var a = "",
      o = "",
      t = "",
      i = "",
      l = "",
      n = "";
    if (e.href && e.href.toLowerCase().startsWith(MAILTO)) {
      (o = decodeURIComponent(
        e.href
          .split("?")[0]
          .split(MAILTO)[1]
          .trim()
      )),
        (a = new URL(e.href));
      var d = new URLSearchParams(a.search);
      (t = d.get("cc")),
        (i = d.get("bcc")),
        (l = d.get("subject")),
        (n = d.get("body"));
    } else
      (o =
        e.getAttribute("data-address") + "@" + e.getAttribute("data-domain")),
        (a = new URL(MAILTO + encodeURIComponent(o))),
        (t =
          e.getAttribute("data-cc-address") +
          "@" +
          e.getAttribute("data-cc-domain")),
        (i =
          e.getAttribute("data-bcc-address") +
          "@" +
          e.getAttribute("data-bcc-domain")),
        (l = e.getAttribute("data-subject")),
        (n = e.getAttribute("data-body"));
    if (validateEmails(o.split(","))) {
      t && !validateEmails(t.split(",")) && (t = ""),
        i && !validateEmails(i.split(",")) && (i = "");
      var m = getE("mailgo-title"),
        c = (getE("mailgo-details"), getE("mailgo-cc")),
        r = getE("mailgo-cc-value"),
        g = getE("mailgo-bcc"),
        s = getE("mailgo-bcc-value"),
        p = getE("mailgo-subject"),
        u = getE("mailgo-subject-value"),
        h = getE("mailgo-body"),
        v = getE("mailgo-body-value"),
        b = getE("mailgo-gmail"),
        f = getE("mailgo-outlook"),
        y = getE("mailgo-open"),
        C = getE("mailgo-copy");
      (m.innerHTML = o.split(",").join("<br/>")),
        t
          ? ((c.style.display = "block"),
            (r.innerHTML = t.split(",").join("<br/>")))
          : (c.style.display = "none"),
        i
          ? ((g.style.display = "block"),
            (s.innerHTML = i.split(",").join("<br/>")))
          : (g.style.display = "none"),
        l
          ? ((p.style.display = "block"), (u.textContent = l))
          : (p.style.display = "none"),
        n
          ? ((h.style.display = "block"), (v.textContent = n))
          : (h.style.display = "none"),
        b.addEventListener("click", function() {
          return actions.openGmail(o, t, i, l, n);
        }),
        f.addEventListener("click", function() {
          return actions.openOutlook(o, l, n);
        });
      var E = encodeEmail(o);
      y.addEventListener("click", function() {
        return actions.openDefault(E);
      }),
        C.addEventListener("click", function() {
          return actions.copy(o, C);
        }),
        showMailgo(),
        document.addEventListener("keydown", function() {
          return mailgoKeydown(o, t, i, l, n, E, C);
        });
    }
  },
  actions = {
    openGmail: function(e, a, o, t, i) {
      var l =
        "https://mail.google.com/mail/u/0/?view=cm&source=mailto&to=" +
        encodeURIComponent(e);
      a && (l = l.concat("&cc=" + encodeURIComponent(a))),
        o && (l = l.concat("&bcc=" + encodeURIComponent(o))),
        t && (l = l.concat("&subject=" + t)),
        i && (l = l.concat("&body=" + i)),
        window.open(l, "_blank");
    },
    openOutlook: function(e, a, o) {
      var t =
        "https://outlook.live.com/owa/?path=/mail/action/compose&to=" +
        encodeURIComponent(e);
      a && (t = t.concat("&subject=" + a)),
        o && (t = t.concat("&body=" + o)),
        window.open(t, "_blank");
    },
    openDefault: function(e) {
      mailToEncoded(e);
    },
    copy: function(e, a) {
      copyToClipboard(e),
        (a.textContent = "copied"),
        setTimeout(function() {
          return (a.textContent = "copy");
        }, 999);
    }
  },
  isMailgo = function(e) {
    return (
      (e.href &&
        e.href.toLowerCase().startsWith(MAILTO) &&
        !e.classList.contains("no-mailgo")) ||
      (e.href && "#mailgo" === e.getAttribute("href").toLowerCase()) ||
      (e.classList && e.classList.contains("mailgo"))
    );
  },
  mailgoCheckRender = function(e) {
    if (document.contains(getE("mailgo"))) {
      var a =
        e.path ||
        (e.composedPath && e.composedPath()) ||
        composedPath(e.target);
      a &&
        a.forEach(function(a) {
          if (isMailgo(a)) return e.preventDefault(), void mailgoRender(a);
        });
    }
  },
  mailgoKeydown = function(e, a, o, t, i, l, n) {
    if (mailgoIsShowing())
      switch (event.keyCode) {
        case 27:
          hideMailgo();
          break;
        case 71:
          actions.openGmail(e, a, o, t, i);
          break;
        case 79:
          actions.openOutlook(e, t, i);
          break;
        case 32:
        case 13:
          actions.openDefault(l);
          break;
        case 67:
          actions.copy(e, n);
          break;
        default:
          return;
      }
  };
document.addEventListener("DOMContentLoaded", mailgoInit),
  document.addEventListener("click", mailgoCheckRender);
var validateEmail = function(e) {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      e
    );
  },
  showMailgo = function() {
    return (getE("mailgo").style.display = "flex");
  },
  hideMailgo = function() {
    return (getE("mailgo").style.display = "none");
  },
  mailgoIsShowing = function() {
    return "flex" === getE("mailgo").style.display;
  },
  mailToEncoded = function(e) {
    return (window.location.href = MAILTO + atob(e));
  },
  encodeEmail = function(e) {
    return btoa(e);
  },
  getE = function(e) {
    return document.getElementById(e);
  },
  composedPath = function(e) {
    for (var a = []; e; ) {
      if ((a.push(e), "HTML" === e.tagName))
        return a.push(document), a.push(window), a;
      e = e.parentElement;
    }
  },
  validateEmails = function(e) {
    return e.every(validateEmail);
  },
  copyToClipboard = function(e) {
    var a = document.createElement("textarea");
    (a.value = e),
      a.setAttribute("readonly", ""),
      (a.style.position = "absolute"),
      (a.style.left = "-9999px"),
      document.body.appendChild(a);
    var o =
      0 < document.getSelection().rangeCount &&
      document.getSelection().getRangeAt(0);
    a.select(),
      document.execCommand("copy"),
      document.body.removeChild(a),
      o &&
        (document.getSelection().removeAllRanges(),
        document.getSelection().addRange(o));
  };
