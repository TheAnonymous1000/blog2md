---
title: 'Lspatch - Now run Xposed modules without root on Android devices. '
date: 2023-05-19T12:00:00.002+05:30
draft: false
url: /2023/05/lspatch-now-run-xposed-modules-without.html
tags: 
- Apps
- Android devices
- Root
- Lspatch  Xposed modules
---

 [![](https://blogger.googleusercontent.com/img/a/AVvXsEgvYORPtE0rYT-c6q6omxRx6ozGcSz9x0Yrxiap39ERxthJddpMTIbFysIUD-kPRAgAmNEGhpoeRM2EKLx7j37OtyGZMcF8JqyMUuJmkoUsroQdIICmAQ77xlelT20SvW9Pmx0bVjKGFOecw2cePJnbbxro570JieTAAcyM7swONMNbmgzcWGgasQ85L3g6)](https://blogger.googleusercontent.com/img/a/AVvXsEgvYORPtE0rYT-c6q6omxRx6ozGcSz9x0Yrxiap39ERxthJddpMTIbFysIUD-kPRAgAmNEGhpoeRM2EKLx7j37OtyGZMcF8JqyMUuJmkoUsroQdIICmAQ77xlelT20SvW9Pmx0bVjKGFOecw2cePJnbbxro570JieTAAcyM7swONMNbmgzcWGgasQ85L3g6) 

  

CyanogenMod have you ever heard of this custom rom? If you're into Android stuff  since long time then you may probably do isn't it? CyanogenMod is basically once up on a time most popular and top Android custom rom used by like millions of people, it used to provide a lot of pretty amazing customizations and features through custom roms for number of years of various Android versions for a lot of devices, which are usually not available on stock Android builds released by Google and many other device makers aka OEMs isn't that cool? due to such awesomeness of CyanogenMod it not just inspired many third party developers around the world to build their own Android custom roms but also made them to use CyanogenMod as base for majority of custom roms due to that the fanbase and tech community of CyanogenMod grown exponentially to the level that back in year 2016 well known big india's mobile maker company Micromax partnered with CyanogenMod to release it's Yu Yuphoria series smartphones with CyanogenMod thanks to that Micromax Yu smartphone series recieved quite enough attention and sells in market, but thing is later on CyanogenMod was discontinued by it's team due to some internal conflicts within Cyanogen Inc., yet thankfully many members in order to revive Cyanogenmod have contributed to develop and launch it's fabulous sucessor named LineageOS.

  

LineageOS like it's predecessor CyanogenMod is an foss aka free and open source software, but thing is it's not customization oriented custom rom instead it focused on minimal useful changes and kept things original as possible, thanks to that many people and third party developers who like to use and make stock Android custom roms started using LineageOS as base, due to that now it received huge userbase and considered as one of the best custom roms available for Android devices, but thing is not everyone like to use pure stock Android like custom roms isn't it? there are certain percentage of people who instead want and prefer to utilize extensive feature rich customizable custom roms, thought there are many of them, but at the end it's quite difficult to integrate each and everything in one right? which is why many third party developers cherry pick features from different stock as well as custom roms to add and build their own custom roms as they want and for users around the world accordingly so that users can choose and switch custom roms as per needs easily.

  

Even though, since long time we have thousands of super cool feature rich custom roms integrated with modern technologies, which can be installed on any compatible hardware Android devices simply through adb fastboot or custom recoveries like TWRP, but thing is at the end for whatever reason there's chance custom roms may didn't satisfy in one way or another isn't it? like for instance you may be felt stock OEM roms are much better than most custom roms in terms of better performance and usability right? In anycase pure stock Android roms doesn't provide things which you'll get on custom roms, so if you're someone who is unable to use custom roms, but still want to get and can't get over with customizations and features of custom roms then since long time main thing and alternative to custom roms we have is to root Android devices using softwares like Chainfire SuperSu or Magisk etc, they'll provide write access to system partition so that you will be able to do core system level changes on Android as you like to get desired output and do almost all things extensively on the go.

  

However, thought rooting Android devices is pretty easy task as all you have to do is basically unlock device bootloader and then you can simply even root it without PC using one click root mobile apps like  Kingoroot or Framaroot etc, but thing is in order to customize and add features on Android devices you either have to be a skilled developer or person with well knowledge on structure of Android else you may hard or softbrick devices which is sometimes irreparable, so if you're newbie then it's better to stay out of it or deal root system level things carefully on Android to be in safe zone, as it can mess up things severely instead you can use root apps, thanks to many third party developers who over the years already made and released many root apps for various purposes to not just customize and get new features on Android but also do a lot more stuff like change user interface or get dolby atmos and digital surround sound etc isn't that fabulous? At the end there is no doubt we have a lot of fantastic root apps and tools, but the one that mesmerized and not just changed the way users customize and get new features on Android device but also leveled up them is Xposed Framework.

  

Xposed Framework is basically free and open source root app for Android devices created by XDA recognized developer Rovo89 back in early rise of Android era, since the beginning of Xposed Framework it received huge userbase and over the years got immense popularity among Android users thanks to it's functionalities, Xposed Framework has many interesting and useful modules build by third party developers around the world, when you use Xposed Framework with modules they'll inject certain code directly into selected and enabled Android system or users apps, so that you can not only just lock or unlock stuff to enable or disable restrictions and things on Android devices, but also you will be able to customize and get new features effectively, which is why Xposed Framework has long been must have root app on Android devices.

  

Usually, as time goes technologies keep on evolving as per requirements and needs of market as people usually want and expect more out of their products same goes for Xposed Framework, even thought it's in initial stage itself is pretty good one, yet evolution to next level as per demand of users is necessary to cope up and stay up-to-date in market accordingly  which is necessary, that's why Rovo89 allowed anyone to make and provide their own forms of Xposed Framework so that people can use it quite more efficiently and effectively, thanks to the fact Xposed Framework is free and open source app it's code is publicly available as repository on contributive development platform GitHub, due to that anyone from internet can not just commit their code to improve Xposed Framework, but also can use it's code to develop own forms of Xposed Framework like for instance numerous third party developers over the years already started developing and releasing  various forms of Xposed Framework like  for instance to name few top and popular ones EdXposed and LSPosed etc.

  

Even though, there are many various forms of Xposed Framework but the one that we are now specifically going to discuss is  LSPosed available as module for Riru and  Zygisk to be installed on Magisk rooted Android devices, which support Android 8.1 and above devices with Magisk v24+, Lsposed has it's own framework based on it's hooks developers can provide Xposed modules, but a module based on LSPosed framework is fully compatible with original Xposed Framework, and vice versa at the same time Xposed Framework-based module will work well with LSPosed framework, isn't that amazing? at the end any form of Xposed Framework you use most of them require root access and they modify apps at runtime without touching apps which is good as it has number of advantages mainly It's easy to undo as all the changes are done in memory, you just need to deactivate module and reboot to get your original system back and multiple modules can do changes to the same part of the system or app and many more.

  

Xposed Framework and it's various forms like LSPosed are undoubtedly pretty useful in customizing and get new features on Android devices but thing is as said earlier they all require root due to their design structure and functionality thought it's easy to acquire root access but thing is it's not always possible to root isn't it? you may be for whatever reasons don't like and want to root Android devices right? mainly because you must unlock bootloader to root which some OEMs don't allow like Asus, IQOO etc including that even if you have such device which has unlockable bootloader still at the end rooting Android devices voilates warranty unless you live in european union, so if you are someone who can't root Android but still want to use Xposed Framework then you are at right place, LSPosed is free and open source same as Xposed Framework thanks to that a third party developer JasonKhew96 build and released non- root Xposed framework named LSPatch extending from LSPosed, so that you can do Xposed Framework stuff without root on Android devices, isn't that fantastic? so do you like it? are you interested? If yes let's explore more.

  

**• LSPatch official support •**

\- [GitHub](https://github.com/LSPosed/LSPatch) 

**• How to download LSPatch •**

\- [GitHub](https://github.com/LSPosed/LSPatch)

**• LSPatch key features with UI / UX Overview •**

 **[![](https://blogger.googleusercontent.com/img/a/AVvXsEglRMWqRwVnYjLBybGxuFgHN48haeQzIQ2glYSf8dT38PHJYIDNt519pKdKJkYOvkWlAU_z5Op9ew9ZpXG6zB26GTCHMtKB-8FnYkFP8AqVMlC837JR5Vjs20dJeBhfGbmVdkj80hfBHL76dEEFqCLfDUtDC4HxZp8y7XwvFhbUuPlbdh_9N8uuNrOPGYHH)](https://blogger.googleusercontent.com/img/a/AVvXsEglRMWqRwVnYjLBybGxuFgHN48haeQzIQ2glYSf8dT38PHJYIDNt519pKdKJkYOvkWlAU_z5Op9ew9ZpXG6zB26GTCHMtKB-8FnYkFP8AqVMlC837JR5Vjs20dJeBhfGbmVdkj80hfBHL76dEEFqCLfDUtDC4HxZp8y7XwvFhbUuPlbdh_9N8uuNrOPGYHH) 

 [![](https://blogger.googleusercontent.com/img/a/AVvXsEjWQfTbSP4Koz6gAka5FJqHGvfRRxGbWDEqENViJWXMClRf5Gi92ShyDHRz1YZnwFmcMsZlDvZCToyXtl1t9d2plaLidwFCXszws6OAVT5m5Q9SdviituCZdlZGMS4gzpB83l_9qyrR8Ao7JO5nfFBGIg9JZPgNp3IRCqtN9B3LWQA27cvPrTHeq8JmOs4z)](https://blogger.googleusercontent.com/img/a/AVvXsEjWQfTbSP4Koz6gAka5FJqHGvfRRxGbWDEqENViJWXMClRf5Gi92ShyDHRz1YZnwFmcMsZlDvZCToyXtl1t9d2plaLidwFCXszws6OAVT5m5Q9SdviituCZdlZGMS4gzpB83l_9qyrR8Ao7JO5nfFBGIg9JZPgNp3IRCqtN9B3LWQA27cvPrTHeq8JmOs4z) 

 [![](https://blogger.googleusercontent.com/img/a/AVvXsEhKrhF-W6bCYCyGbmtHGv_XYTz9XDYGmArQAEuW9P5osN3or5BkNoHXrSHDaC8HMbFZ9l-EWbDs_iyOhRxnBZJZMK6tOoYXjm509R_tNEA1Rz0TPlcmqoKdH0eATE3jsCzx6SwOnHrFMbXq-fIDk7lfw5LLO__vJyq6Maev-Vkv58B2IhSDF7Lat0BPBDJm)](https://blogger.googleusercontent.com/img/a/AVvXsEhKrhF-W6bCYCyGbmtHGv_XYTz9XDYGmArQAEuW9P5osN3or5BkNoHXrSHDaC8HMbFZ9l-EWbDs_iyOhRxnBZJZMK6tOoYXjm509R_tNEA1Rz0TPlcmqoKdH0eATE3jsCzx6SwOnHrFMbXq-fIDk7lfw5LLO__vJyq6Maev-Vkv58B2IhSDF7Lat0BPBDJm) 

 [![](https://blogger.googleusercontent.com/img/a/AVvXsEiHKt5T51dKca5g2Ua3G9_gphTcbDuA3MnkNgsWEo4oNjJoGcZZ_3FagYRqB2fpjFM-hYwowIK6AiXWUArdSsWlvDYANSIkYPVP2RYltI2JgFSDhWpW1CGH0GLP12xdqoT5QJb5bqlGH8e4bDrRuVkMPqZTXXNw9_tVIXr5pKA3oBWt8dxb6Su-B4gnpgSJ)](https://blogger.googleusercontent.com/img/a/AVvXsEiHKt5T51dKca5g2Ua3G9_gphTcbDuA3MnkNgsWEo4oNjJoGcZZ_3FagYRqB2fpjFM-hYwowIK6AiXWUArdSsWlvDYANSIkYPVP2RYltI2JgFSDhWpW1CGH0GLP12xdqoT5QJb5bqlGH8e4bDrRuVkMPqZTXXNw9_tVIXr5pKA3oBWt8dxb6Su-B4gnpgSJ) 

 [![](https://blogger.googleusercontent.com/img/a/AVvXsEjFGo24uTca4ZTB7ao3nLBoIDDU_hZZ3J12KeaD63q1T0xKx0B2Y7NcsZoj7XRTpfBSLnGQSuYmUb3XoYlUg4wLZT8zUuqHGTrvGiXe3R8P5VzNPelUgyeNv0p_XVf2H8Z_JWOHQQmktC-2syK3QMPK-HPKceQA2hYGMfEbInPgRO8NQX8RKpwlHom93BMO)](https://blogger.googleusercontent.com/img/a/AVvXsEjFGo24uTca4ZTB7ao3nLBoIDDU_hZZ3J12KeaD63q1T0xKx0B2Y7NcsZoj7XRTpfBSLnGQSuYmUb3XoYlUg4wLZT8zUuqHGTrvGiXe3R8P5VzNPelUgyeNv0p_XVf2H8Z_JWOHQQmktC-2syK3QMPK-HPKceQA2hYGMfEbInPgRO8NQX8RKpwlHom93BMO)** 

Atlast, this are just highlighted features of LSPatch there may be many hidden features in-build that provides you external benefits to give the ultimate usage experience, anyway if you want one of the best no-root Xposed Framework then LSPatch is on go best choice for sure.

  

Overall, LSPatch comes with light and dark mode by default, it has clean and simple  interface that ensures user friendly experience, but in any project there is always space for improvement so let's wait and see will LSPatch get any major UI changes in future to make it even more better, as of now it's impressive.

  

Moreover, it is definitely worth to mention LSPatch is one of the very few no-root Xposed Framework app available out there on world wide web of internet for Android devices, yes indeed if you're searching for such app then at present LSPatch has potential to become your new favourite.

  

Finally, this is LSPatch, a free and open source XPosed Framework to customize and get new features without root on Android devices, are you an existing user of LSPatch? If yes do say your experience and mention why you like LSPatch in our comment section below, see ya :)