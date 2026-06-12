import { FooterEl, Inner, Brand, Nav, FootLink } from "./Footer.styles";

export default function Footer() {
  return (
    <FooterEl>
      <Inner>
        <Brand>© {new Date().getFullYear()} curepo.dev </Brand>
        <Nav>
          <FootLink
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </FootLink>
          <FootLink href="/about">About</FootLink>
          <FootLink href="/terms">Terms</FootLink>
        </Nav>
      </Inner>
    </FooterEl>
  );
}


/*
<footer class="bg-surface border-t border-outline-variant/30 pt-12 pb-6">
  <div class="max-w-container-max mx-auto px-margin-desktop">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-12">
      <!-- Column 1: Brand -->
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-2 font-headline-md text-on-surface font-bold">
          <img src="https://lh3.googleusercontent.com/aida/ADBb0uguH8SrL9ltZmIvH1ep7gpWgLKxf8S4SS7b6gK42-AhtJZOSvr_b0OYug2yeVTt_CbjmVrss3-pqbXnc7yjKX1y2wYPY88pxJFYl7OCc-sFtuPu-v_LzE30pNa7sKRW9bhNtdGIZ3KIMwY_NQYRLwVaprjvsiUdqH0Jpf1qpyOCZw9B5adtt8ANWAYh-JErqkJtyr6MaJPqx4vF6t98UxTvAaOEGOehtFrQHXeSe8dfJVc0s26AGhddayKf" alt="curepo logo" class="w-8 h-8">
          <span class="">curepo</span>
        </div>
        <p class="text-on-surface-variant font-body-md">
          Discover the next star for your developer toolkit.
        </p>
        <div class="flex gap-4 mt-2">
          <a href="#" class="text-on-surface-variant hover:text-primary transition-colors">
            <span class="material-symbols-outlined">terminal</span>
          </a>
          <a href="#" class="text-on-surface-variant hover:text-primary transition-colors">
            <span class="material-symbols-outlined">public</span>
          </a>
        </div>
      </div>
      <!-- Column 2: Product -->
      <div>
        <h4 class="font-headline-md text-[18px] text-on-surface font-bold mb-4">Product</h4>
        <ul class="flex flex-col gap-3 font-body-md text-on-surface-variant">
          <li class=""><a href="#" class="hover:text-primary transition-colors">Browse</a></li>
          <li class=""><a href="#" class="hover:text-primary transition-colors">About</a></li>
          <li class=""><a href="#" class="hover:text-primary transition-colors">Topics</a></li>
          <li class=""><a href="#" class="hover:text-primary transition-colors">Featured</a></li>
        </ul>
      </div>
      <!-- Column 3: Resources -->
      <div>
        <h4 class="font-headline-md text-[18px] text-on-surface font-bold mb-4">Resources</h4>
        <ul class="flex flex-col gap-3 font-body-md text-on-surface-variant">
          <li class=""><a href="#" class="hover:text-primary transition-colors">Documentation</a></li>
          <li class=""><a href="#" class="hover:text-primary transition-colors">API</a></li>
          <li class=""><a href="#" class="hover:text-primary transition-colors">Guidelines</a></li>
          <li class=""><a href="#" class="hover:text-primary transition-colors">Privacy</a></li>
        </ul>
      </div>
      <!-- Column 4: Stay Updated -->
      <div class="flex flex-col gap-4">
        <h4 class="font-headline-md text-[18px] text-on-surface font-bold">Stay Updated</h4>
        <form class="flex flex-col gap-2">
          <input type="email" placeholder="Email address" class="bg-surface-container-low border border-outline-variant/50 rounded-lg px-4 py-2 text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all">
          <button type="submit" class="bg-primary text-on-primary font-bold px-4 py-2 rounded-lg hover:bg-primary/90 transition-all active:scale-[0.98]">
            Subscribe
          </button>
        </form>
      </div>
    </div>
    <!-- Bottom Bar -->
    <div class="pt-6 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4 text-on-surface-variant font-body-md text-sm">
      <p class="">© 2024 curepo. All rights reserved.</p>
      <p class="">Built with Next.js</p>
    </div>
  </div>
</footer>

*/