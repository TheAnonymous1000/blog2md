---
title: 'How to hide root and run banking apps on Android using Magisk.'
date: 2022-03-13T23:39:00.001+05:30
draft: false
url: /2022/03/how-to-hide-root-and-run-banking-apps.html
tags: 
- How
- technology
- Banking apps
- Hide root
- magisk
---

  

 [![](https://lh3.googleusercontent.com/-z5NBn7ii5Rc/Yi4zSe__njI/AAAAAAAAJps/v7ACrg5fPYYRjPghHfb9DaO1bND-MnWrwCNcBGAsYHQ/s1600/1647194950186534-0.png)](https://lh3.googleusercontent.com/-z5NBn7ii5Rc/Yi4zSe__njI/AAAAAAAAJps/v7ACrg5fPYYRjPghHfb9DaO1bND-MnWrwCNcBGAsYHQ/s1600/1647194950186534-0.png) 

  

Android powered smartphones by default lock write access to system files aka root level as altering them without knowledge will lead to soft and hard bricked devices which is sometimes irrepairable, however 

many people still want to access system level files as modifying them can get new  features and for those android rooting is a process which provide superuser access known as root access in Android.

  

But, rooting Android voids warranty which is why people stay away from rooting thier new smartphones as it increases chances of hacking, anyway usually developers and geeks root Android to gain advanced level access to dedug apps or new features etc, especially to install latest custom roms or root apps like 3c Tools, App2SD Pro - All In One Toolbox, Greenify etc.

  

Generally, old smartphones that are powered by Android are easy to root as you only need Android rooting apps like kingroot, iroot, root master, SRS root and Root genius etc to root Android in 1 click, but when modern and advanced Android powered smartphones came Into market, rooting process become bit difficult as in new gen smartphones in-order to root you have to first unlock bootloader.

  

SuperSu is well known and popular rooting method for Android created by Chainfire which is preffered rooting method and supports most Android smartphones, but 

when creator of Chainfire announces end of development there is no best alternative root method available for Android and then a developer named Topjohnwu created and introduced an open source Android rooting method Magisk.  

  

Magisk is advanced and modern rooting method for Android powered smartphones with numerous features that has ability to pass safetynet of Google including that Magisk also support modules with it's own magisk module repo like we have Xposed modules and hide root is also possible through MagiskHide but when John Wu joined Google's Android security team he has to remove MagiskHide support from Magisk for various reasons.

  

However, eventually in future releases of Magisk we got to see new features like Zygisk that runs on Zygote daemon and denylist which allows you to hide root and run apps that are not supported in rooted devices like banking apps, so whoever facing issue or don't know how to use banking apps on magisk rooted Android devices, we are going to provide details step by step instructions below, so are you ready? If yes let's get started.

  

**• How to download custom Magisk •**

It is very easy to download Magisk from these platforms for free.

  

\- [Github](https://github.com/TheHitMan7/Magisk-Files)

  

**• Custom Magisk Support •**

\- [Telegram channel](https://t.me/magiskcustom)

\- [Telegram group](https://t.me/custommagisk)

\- [Github Repository](https://github.com/TheHitMan7/Magisk)

  

**• How to install Magisk •**

Note : Magisk is a rooting method like SuperSU, you have to first install custom rom specifically created for your device then install custom Magisk created by TheHitman7 not orginal magisk using custom recovery like TWRP aka Team win recovery project and that will install a custom magisk manager app on your android device by using that you can grant root permissions to apps, hide root and run banking apps, install modules and many more.

**• How to hide root and run banking apps on Android using custom Magisk •**

 **[![](https://lh3.googleusercontent.com/-6EXZWSCyIZ0/Yi83lkdz3fI/AAAAAAAAJqY/5gPvRf7XXTIBIgNh5gA3y1kCW6JFVvTugCNcBGAsYHQ/s1600/1647261587118811-0.png)](https://lh3.googleusercontent.com/-6EXZWSCyIZ0/Yi83lkdz3fI/AAAAAAAAJqY/5gPvRf7XXTIBIgNh5gA3y1kCW6JFVvTugCNcBGAsYHQ/s1600/1647261587118811-0.png)** 

\- Once custom magisk is downloaded on your device, reboot to custom recovery.

  

\- Here, 'm using Orange fox you can using Orange fox you can use TWRP as well.

  

\- Select custom magisk.zip

  

 [![](https://lh3.googleusercontent.com/-lhVfmDL5Qyw/Yi83kckql4I/AAAAAAAAJqU/9narmsQoggAyCmpQQmVfeD80-ogLVnblwCNcBGAsYHQ/s1600/1647261583058798-1.png)](https://lh3.googleusercontent.com/-lhVfmDL5Qyw/Yi83kckql4I/AAAAAAAAJqU/9narmsQoggAyCmpQQmVfeD80-ogLVnblwCNcBGAsYHQ/s1600/1647261583058798-1.png) 

  

\- **Swipe to Install**

 **[![](https://lh3.googleusercontent.com/-2pYoJwYN5uE/Yi83jTU-uVI/AAAAAAAAJqQ/NYOgVay4tzMRtlzEqMhmEeoGW2HXzPmhgCNcBGAsYHQ/s1600/1647261578829742-2.png)](https://lh3.googleusercontent.com/-2pYoJwYN5uE/Yi83jTU-uVI/AAAAAAAAJqQ/NYOgVay4tzMRtlzEqMhmEeoGW2HXzPmhgCNcBGAsYHQ/s1600/1647261578829742-2.png)** 

\- If installation is ...done then tap on **Reboot System**

 **[![](https://lh3.googleusercontent.com/-eAQnzF1Mlyg/Yi83ibluJDI/AAAAAAAAJqM/v0_BRJuGzYwfkrFfr-ztSlYqjKKS81z1wCNcBGAsYHQ/s1600/1647261574378995-3.png)](https://lh3.googleusercontent.com/-eAQnzF1Mlyg/Yi83ibluJDI/AAAAAAAAJqM/v0_BRJuGzYwfkrFfr-ztSlYqjKKS81z1wCNcBGAsYHQ/s1600/1647261574378995-3.png)** 

\- Open Magisk Manager, then tap on **⚙**

  

 [![](https://lh3.googleusercontent.com/-Hky_kotiq2k/Yi83hIqFLzI/AAAAAAAAJqI/J42VC7OffnMigyo2EjR_y_HwICPTc9SlgCNcBGAsYHQ/s1600/1647261569614910-4.png)](https://lh3.googleusercontent.com/-Hky_kotiq2k/Yi83hIqFLzI/AAAAAAAAJqI/J42VC7OffnMigyo2EjR_y_HwICPTc9SlgCNcBGAsYHQ/s1600/1647261569614910-4.png) 

  

\- Enable Zygisk and MagiskHide and go back to home.

  

 [![](https://lh3.googleusercontent.com/-Qm0_d1gYxc0/Yi83gOb7Y3I/AAAAAAAAJqE/yjq7QlQN6-IH-N_DR3UkRxyIBLnkv3llwCNcBGAsYHQ/s1600/1647261565711304-5.png)](https://lh3.googleusercontent.com/-Qm0_d1gYxc0/Yi83gOb7Y3I/AAAAAAAAJqE/yjq7QlQN6-IH-N_DR3UkRxyIBLnkv3llwCNcBGAsYHQ/s1600/1647261565711304-5.png) 

  

\- Tap on Superuser then tap on **MagiskHide ->**

 **[![](https://lh3.googleusercontent.com/-Sd1pxQOmENA/Yi83fL7Qk1I/AAAAAAAAJqA/88vYRr1xV4cSoOF8emtJAiml6MZWDmXpACNcBGAsYHQ/s1600/1647261560381357-6.png)](https://lh3.googleusercontent.com/-Sd1pxQOmENA/Yi83fL7Qk1I/AAAAAAAAJqA/88vYRr1xV4cSoOF8emtJAiml6MZWDmXpACNcBGAsYHQ/s1600/1647261560381357-6.png)** 

 Check ✓ banking apps and Google Play Services.

  

Voila, now go back to open and run banking apps on your rooted Android device.

  

Atlast, this are just highlighted features of custom magisk manager there may be many hidden features in-build that provides you external benefits to give the ultimate usage experience, so if you want one of the best method to run banking apps on rooted android device then you can install this on the way.

  

Overall, Magisk Manager comes with light and dark mode by default, it has clean and simple intuitive interface that ensures user friendly experience, but in any project there is always space for improvement so let's wait and see will Magisk Manager get any major UI changes in future to make it even more better as of now it's assuring for sure.

  

Moreover, it is worth to mention this is one of the very few easy methods to hide root and run apps that are not working on rooted Android devices like banking apps using custom magisk, right now but remember in future we can't guarantee or assure you that this method will work for sure as Android implement new features regularly to secure developers and users.

  

Finally, this is custom Magisk with MagiskHide that was actually discontinued by John Wu in his orignal Magisk Releases, which allows you to hide root and run banking apps using zygisk and denylist , are you an existing user of this method? If yes do say your experience and mention if you know any better method to hide root and run banking apps on Android device in our comment section below, see ya :)