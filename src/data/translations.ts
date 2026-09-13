import type { Language, TranslationDict } from '../types';

export const translations: Record<Language, TranslationDict> = {
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.tools': 'Tools',
    'nav.about': 'About',
    'nav.faq': 'FAQ',
    
    // Theme
    'theme.light': 'Light',
    'theme.dark': 'Dark',
    'theme.system': 'System',
    
    // Language
    'lang.switch': 'العربية',
    'lang.english': 'English',
    'lang.arabic': 'العربية',
    
    // Hero
    'hero.badge': 'Professional Image Tools',
    'hero.title': 'All Your Image Tools,',
    'hero.title2': 'In One Place',
    'hero.desc': 'Compress, resize, convert, crop, and edit images directly in your browser. Fast, secure, and completely private.',
    'hero.ctaPrimary': 'Get Started',
    'hero.ctaSecondary': 'Browse All Tools',
    
    // Upload
    'upload.title': 'Drop your images here',
    'upload.subtitle': 'or click to browse files',
    'upload.formats': 'Supported: JPG, PNG, WebP, GIF, BMP',
    'upload.maxSize': 'Max file size: 10MB',
    'upload.multiple': 'Multiple files supported',
    'upload.processing': 'Processing...',
    'upload.error': 'Error uploading file',
    'upload.errorType': 'Unsupported file type',
    'upload.errorSize': 'File too large',
    'upload.dragOver': 'Drop files here...',
    
    // Tools
    'tools.title': 'Image Tools',
    'tools.subtitle': 'Everything you need to process and optimize your images',
    'tools.category.basic': 'Basic Editing',
    'tools.category.convert': 'Conversion',
    'tools.category.optimize': 'Optimization',
    
    'tool.compressor': 'Image Compressor',
    'tool.compressor.desc': 'Reduce file size while keeping quality',
    'tool.resizer': 'Image Resizer',
    'tool.resizer.desc': 'Change dimensions with aspect ratio lock',
    'tool.converter': 'Image Converter',
    'tool.converter.desc': 'Convert between JPG, PNG, and WebP',
    'tool.cropper': 'Image Cropper',
    'tool.cropper.desc': 'Crop images with custom aspect ratios',
    'tool.rotator': 'Image Rotator',
    'tool.rotator.desc': 'Rotate images 90°, 180°, or 270°',
    'tool.flipper': 'Image Flipper',
    'tool.flipper.desc': 'Flip images horizontally or vertically',
    
    // Common tool UI
    'common.upload': 'Upload Image',
    'common.preview': 'Preview',
    'common.download': 'Download',
    'common.reset': 'Reset',
    'common.processing': 'Processing...',
    'common.original': 'Original',
    'common.result': 'Result',
    'common.back': 'Back to Tools',
    'common.orSelect': 'or select a file',
    
    // Compressor
    'compressor.quality': 'Quality',
    'compressor.originalSize': 'Original Size',
    'compressor.compressedSize': 'Compressed Size',
    'compressor.reduction': 'Reduction',
    'compressor.compress': 'Compress Image',
    
    // Resizer
    'resizer.width': 'Width (px)',
    'resizer.height': 'Height (px)',
    'resizer.lockRatio': 'Lock aspect ratio',
    'resizer.preset': 'Preset',
    'resizer.custom': 'Custom',
    'resizer.resize': 'Resize Image',
    
    // Converter
    'converter.format': 'Output Format',
    'converter.convert': 'Convert Image',
    
    // Cropper
    'cropper.aspectRatio': 'Aspect Ratio',
    'cropper.free': 'Free',
    'cropper.square': 'Square (1:1)',
    'cropper.portrait': 'Portrait (4:5)',
    'cropper.landscape': 'Landscape (16:9)',
    'cropper.crop': 'Crop Image',
    
    // Rotator
    'rotator.rotate90': 'Rotate 90°',
    'rotator.rotate180': 'Rotate 180°',
    'rotator.rotate270': 'Rotate 270°',
    'rotator.apply': 'Apply Rotation',
    
    // Flipper
    'flipper.horizontal': 'Flip Horizontal',
    'flipper.vertical': 'Flip Vertical',
    'flipper.apply': 'Apply Flip',
    
    // Features
    'features.title': 'Why Choose Pixora',
    'features.subtitle': 'Built for speed, privacy, and quality',
    'features.private.title': '100% Private',
    'features.private.desc': 'All processing happens in your browser. Your images never leave your device.',
    'features.fast.title': 'Lightning Fast',
    'features.fast.desc': 'No server uploads. Process images instantly on your device.',
    'features.free.title': 'Always Free',
    'features.free.desc': 'All core tools are completely free. No watermarks, no sign-ups.',
    'features.secure.title': 'Secure',
    'features.secure.desc': 'Your files are processed locally. We never store or see your images.',
    
    // How it works
    'how.title': 'How It Works',
    'how.step1.title': 'Upload',
    'how.step1.desc': 'Drag and drop or select your image files',
    'how.step2.title': 'Process',
    'how.step2.desc': 'Adjust settings and process with one click',
    'how.step3.title': 'Download',
    'how.step3.desc': 'Get your processed images instantly',
    
    // Privacy
    'privacy.title': 'Your Privacy Matters',
    'privacy.desc': 'Pixora processes all images directly in your web browser using the Canvas API. No files are uploaded to any server. Your data stays yours.',
    'privacy.note': 'We do not collect, store, or share any of your images.',
    
    // About
    'about.title': 'About Pixora',
    'about.subtitle': 'Professional image tools for everyone',
    'about.p1': 'Pixora is a modern platform for online image processing. Our mission is to provide professional-grade tools that are accessible, fast, and respectful of your privacy.',
    'about.p2': 'Every tool on Pixora runs entirely in your browser using the Canvas API. This means faster processing times and complete privacy — your images never touch our servers.',
    'about.p3': 'Whether you are a designer, developer, marketer, or just someone who needs to quickly edit an image, Pixora has the tools you need.',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Everything you need to know about Pixora',
    'faq.q1': 'Are my images uploaded to a server?',
    'faq.a1': 'No. All image processing happens directly in your browser using the Canvas API. Your images never leave your device.',
    'faq.q2': 'Is Pixora free to use?',
    'faq.a2': 'Yes. All core tools are completely free to use. There are no hidden fees or sign-up requirements.',
    'faq.q3': 'What image formats are supported?',
    'faq.a3': 'We support JPG, PNG, WebP, GIF, and BMP formats for upload. Output formats vary by tool.',
    'faq.q4': 'Is there a file size limit?',
    'faq.a4': 'For optimal performance, we recommend files under 10MB. Larger files may work but could be slower.',
    'faq.q5': 'Do I need to create an account?',
    'faq.a5': 'No account is required. All tools are available directly from your browser.',
    
    // Footer
    'footer.desc': 'Professional online image tools. Fast, secure, and private.',
    'footer.quickLinks': 'Quick Links',
    'footer.tools': 'Tools',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.contact': 'Contact',
    'footer.copyright': '© 2026 Pixora. All rights reserved.',
    'footer.made': 'Crafted with care',
    
    // 404
    'notfound.title': 'Page Not Found',
    'notfound.desc': 'The page you are looking for does not exist.',
    'notfound.back': 'Go Home',
  },
  ar: {
    // Nav
    'nav.home': 'الرئيسية',
    'nav.tools': 'الأدوات',
    'nav.about': 'حول',
    'nav.faq': 'الأسئلة الشائعة',
    
    // Theme
    'theme.light': 'فاتح',
    'theme.dark': 'داكن',
    'theme.system': 'النظام',
    
    // Language
    'lang.switch': 'English',
    'lang.english': 'English',
    'lang.arabic': 'العربية',
    
    // Hero
    'hero.badge': 'أدوات صور احترافية',
    'hero.title': 'كل أدوات الصور التي تحتاجها،',
    'hero.title2': 'في مكان واحد',
    'hero.desc': 'اضغط، غيّر الحجم، حوّل، قص، وعدّل صورك مباشرة في المتصفح. سريع، آمن، وخاص تماماً.',
    'hero.ctaPrimary': 'ابدأ الآن',
    'hero.ctaSecondary': 'استعرض جميع الأدوات',
    
    // Upload
    'upload.title': 'اسحب صورك هنا',
    'upload.subtitle': 'أو اضغط لاختيار الملفات',
    'upload.formats': 'المدعومة: JPG, PNG, WebP, GIF, BMP',
    'upload.maxSize': 'الحد الأقصى: 10 ميجابايت',
    'upload.multiple': 'تدعم ملفات متعددة',
    'upload.processing': 'جاري المعالجة...',
    'upload.error': 'خطأ في رفع الملف',
    'upload.errorType': 'نوع ملف غير مدعوم',
    'upload.errorSize': 'الملف كبير جداً',
    'upload.dragOver': 'أسقط الملفات هنا...',
    
    // Tools
    'tools.title': 'أدوات الصور',
    'tools.subtitle': 'كل ما تحتاجه لمعالجة وتحسين صورك',
    'tools.category.basic': 'التعديل الأساسي',
    'tools.category.convert': 'التحويل',
    'tools.category.optimize': 'التحسين',
    
    'tool.compressor': 'ضغط الصور',
    'tool.compressor.desc': 'تصغير حجم الملف مع الحفاظ على الجودة',
    'tool.resizer': 'تغيير الحجم',
    'tool.resizer.desc': 'تغيير الأبعاد مع قفل نسبة العرض إلى الارتفاع',
    'tool.converter': 'تحويل الصيغ',
    'tool.converter.desc': 'تحويل بين JPG و PNG و WebP',
    'tool.cropper': 'قص الصور',
    'tool.cropper.desc': 'قص الصور بنسب عرض إلى ارتفاع مخصصة',
    'tool.rotator': 'تدوير الصور',
    'tool.rotator.desc': 'تدوير الصور بزوايا 90° و 180° و 270°',
    'tool.flipper': 'عكس الصور',
    'tool.flipper.desc': 'عكس الصور أفقياً أو عمودياً',
    
    // Common tool UI
    'common.upload': 'رفع صورة',
    'common.preview': 'معاينة',
    'common.download': 'تحميل',
    'common.reset': 'إعادة تعيين',
    'common.processing': 'جاري المعالجة...',
    'common.original': 'الأصلي',
    'common.result': 'النتيجة',
    'common.back': 'العودة للأدوات',
    'common.orSelect': 'أو اختر ملفاً',
    
    // Compressor
    'compressor.quality': 'الجودة',
    'compressor.originalSize': 'الحجم الأصلي',
    'compressor.compressedSize': 'الحجم المضغوط',
    'compressor.reduction': 'نسبة التخفيض',
    'compressor.compress': 'ضغط الصورة',
    
    // Resizer
    'resizer.width': 'العرض (بكسل)',
    'resizer.height': 'الارتفاع (بكسل)',
    'resizer.lockRatio': 'قفل نسبة العرض إلى الارتفاع',
    'resizer.preset': 'معد مسبقاً',
    'resizer.custom': 'مخصص',
    'resizer.resize': 'تغيير الحجم',
    
    // Converter
    'converter.format': 'صيغة الإخراج',
    'converter.convert': 'تحويل الصورة',
    
    // Cropper
    'cropper.aspectRatio': 'نسبة العرض إلى الارتفاع',
    'cropper.free': 'حر',
    'cropper.square': 'مربع (1:1)',
    'cropper.portrait': 'عمودي (4:5)',
    'cropper.landscape': 'أفقي (16:9)',
    'cropper.crop': 'قص الصورة',
    
    // Rotator
    'rotator.rotate90': 'تدوير 90°',
    'rotator.rotate180': 'تدوير 180°',
    'rotator.rotate270': 'تدوير 270°',
    'rotator.apply': 'تطبيق التدوير',
    
    // Flipper
    'flipper.horizontal': 'عكس أفقي',
    'flipper.vertical': 'عكس عمودي',
    'flipper.apply': 'تطبيق العكس',
    
    // Features
    'features.title': 'لماذا Pixora',
    'features.subtitle': 'صُمم للسرعة والخصوصية والجودة',
    'features.private.title': 'خصوصية تامة',
    'features.private.desc': 'كل المعالجة تحدث في متصفحك. صورك لا تغادر جهازك أبداً.',
    'features.fast.title': 'سرعة فائقة',
    'features.fast.desc': 'لا رفع للخوادم. معالجة فورية على جهازك.',
    'features.free.title': 'مجاني دائماً',
    'features.free.desc': 'جميع الأدوات الأساسية مجانية تماماً. لا علامات مائية، لا تسجيل.',
    'features.secure.title': 'آمن',
    'features.secure.desc': 'ملفاتك تُعالج محلياً. نحن لا نخزن أو نرى صورك.',
    
    // How it works
    'how.title': 'كيف يعمل',
    'how.step1.title': 'رفع',
    'how.step1.desc': 'اسحب وأفلت أو اختر ملفات الصور',
    'how.step2.title': 'معالجة',
    'how.step2.desc': 'اضبط الإعدادات ومعالجة بنقرة واحدة',
    'how.step3.title': 'تحميل',
    'how.step3.desc': 'احصل على صورك المعالجة فوراً',
    
    // Privacy
    'privacy.title': 'خصوصيتك تهمنا',
    'privacy.desc': 'يعالج Pixora جميع الصور مباشرة في متصفحك باستخدام Canvas API. لا يتم رفع أي ملفات إلى أي خادم. بياناتك تبقى لك.',
    'privacy.note': 'نحن لا نجمع أو نخزن أو نشارك أي من صورك.',
    
    // About
    'about.title': 'حول Pixora',
    'about.subtitle': 'أدوات صور احترافية للجميع',
    'about.p1': 'Pixora هي منصة حديثة لمعالجة الصور عبر الإنترنت. مهمتنا هي تقديم أدوات احترافية سهلة الوصول وسريعة ومحترمة لخصوصيتك.',
    'about.p2': 'كل أداة في Pixora تعمل بالكامل في متصفحك باستخدام Canvas API. هذا يعني أوقات معالجة أسرع وخصوصية تامة — صورك لا تلمس خوادمنا أبداً.',
    'about.p3': 'سواء كنت مصمماً أو مطوراً أو مسوقاً أو مجرد شخص يحتاج لتعديل صورة بسرعة، فإن Pixora لديها الأدوات التي تحتاجها.',
    
    // FAQ
    'faq.title': 'الأسئلة الشائعة',
    'faq.subtitle': 'كل ما تحتاج معرفته عن Pixora',
    'faq.q1': 'هل يتم رفع صوري إلى خادم؟',
    'faq.a1': 'لا. كل معالجة الصور تحدث مباشرة في متصفحك باستخدام Canvas API. صورك لا تغادر جهازك أبداً.',
    'faq.q2': 'هل Pixora مجاني؟',
    'faq.a2': 'نعم. جميع الأدوات الأساسية مجانية تماماً. لا رسوم خفية ولا متطلبات تسجيل.',
    'faq.q3': 'ما صيغ الصور المدعومة؟',
    'faq.a3': 'ندعم صيغ JPG و PNG و WebP و GIF و BMP للرفع. صيغ الإخراج تختلف حسب الأداة.',
    'faq.q4': 'هل يوجد حد لحجم الملف؟',
    'faq.a4': 'لأداء مثالي، نوصي بملفات أقل من 10 ميجابايت. الملفات الأكبر قد تعمل لكنها قد تكون أبطأ.',
    'faq.q5': 'هل أحتاج لإنشاء حساب؟',
    'faq.a5': 'لا حاجة لحساب. جميع الأدوات متاحة مباشرة من متصفحك.',
    
    // Footer
    'footer.desc': 'أدوات صور احترافية عبر الإنترنت. سريع، آمن، وخاص.',
    'footer.quickLinks': 'روابط سريعة',
    'footer.tools': 'الأدوات',
    'footer.legal': 'قانوني',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الاستخدام',
    'footer.contact': 'اتصل بنا',
    'footer.copyright': '© 2026 Pixora. جميع الحقوق محفوظة.',
    'footer.made': 'صُنع بعناية',
    
    // 404
    'notfound.title': 'الصفحة غير موجودة',
    'notfound.desc': 'الصفحة التي تبحث عنها غير موجودة.',
    'notfound.back': 'العودة للرئيسية',
  }
};
