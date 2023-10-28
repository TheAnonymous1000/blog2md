---
title: 'How to flash Android and unbrick device without PC using Bugjaegar.   '
date: 2023-04-15T12:00:00.000+05:30
draft: false
url: /2023/06/how-to-flash-android-and-unbrick-device_20.html
tags: 
- fastboot rom
- technology
- Without PC
- Bugjaegar
- Unbrick Android
---

[![](https://blogger.googleusercontent.com/img/a/AVvXsEghNMNMpAxFjR8yx-gMyqxdDP4kIkn9FMgUicyuQB39Jwx-kG6_xFjz9eta-nCyMqfvYhnF9U3Fc4P5vGRSPKQFHTPr89bKErLSZoqFfNT2vgyBI7fXpkgI6cS-P7DvfPooFX_wH0shzpu-Io-UV860VZqY4i0Mii5fJxxvKIFrxpgb3FX8xXq26LZA5g)](https://blogger.googleusercontent.com/img/a/AVvXsEghNMNMpAxFjR8yx-gMyqxdDP4kIkn9FMgUicyuQB39Jwx-kG6_xFjz9eta-nCyMqfvYhnF9U3Fc4P5vGRSPKQFHTPr89bKErLSZoqFfNT2vgyBI7fXpkgI6cS-P7DvfPooFX_wH0shzpu-Io-UV860VZqY4i0Mii5fJxxvKIFrxpgb3FX8xXq26LZA5g)

  

Firmware, have you ever heard of this thing? which is basically software that you'll find on most electronic gadgets aka devices that basically provide such drivers which make device hardware and software compatible thought firmware itself is enough for most electronic gadgets but when it comes to smartphones you'll need firmware and another software known as OS aka operating system which is included in one file with size in GBs aka giga bytes without OS you will find size of firmware around 100 mb aka mega bytes each and every smartphone have it's own firmware  provided by makers so you have to install right one to run everything quite well.

  

When you upgrade firmware or do any incorrect system level edits on operating system of smartphone like rooting, flash custom recovery and roms, modules, files etc sometimes you may soft or hardbrick device that may get you different types of errors and issues like device slow down, not turning on and continous bootloop etc which can be repaired by flashing original stock firmware including OS in secondary bootloader using certain softwares based on processor like for mediatek we use sp flash tools and for Qualcomm Snapdragon we use Qflash tools and many more but in some cases you may not even able to get into secondary bootloader in that scenario you have to force flash firmware in primary bootloader using edl mode on Qualcomm and on mediatek we have to use download mode to get back lost software device.

  

Most firmware flashing softwares 

including platform tools and command prompt aka CMD are exclusive for PCs which are used to flash certain firmwares that's bit disappointing isn't it? as usually not everyone have or can get PC due to various reasons if you're in such position and got some issue with smartphone then you may likely want to fix software issue of it without PC right? in that scenario we have termux app which is basically CMD aka command prompt for smartphones in that you can install adb or platforms tools and enter adb commands to do anything you want on smartphones but thing is setting up and using Termux is not easy mainly for newbies if you're one of them don't worry we have number of way better alternatives out of them at present best one to do this things is Bugjaegar.  

  

Bugjaegar has in-build adb tools which is currently popular app available for Android OS that day by day gaining a lot of users which provide GUI aka graphical user interface with terminal like cmd so it's convenient to use including that it has many useful functionalities and some most commonly used adb platform tools 

commands to let you do things without entering commands comfortably but thing is in order to use it to execute things you need one external smartphone which work as remote to control other smartphones 

thought it has ability to connect to other devices wirelessly but when dealing with any firmware flashing on smartphones it's always better to connect using usb OTG to let things go well and stay in safe zone.

  

**[+ Bugjaeger - Now you don't need PC to run ADB commands.](https://www.techtracker.in/2022/01/bugjaeger-now-you-dont-need-pc-to-run.html)**

  

In sense, in order to use Bugjaegar you have to connect to external device using micro or type-c OTG cable based on device but remember at present Bugjaegar is only available for Android OS smartphones not iOS for that there may be other tools if you have Android smartphone and wanna use Bugjaegar then you're good to go but as you know when you flash new firmware or custom ROM and GSIs aka generic system image you're device data will be lost which is something that we can't accept isn't it? as we usually store a lot of important files which we don't wanna loose if you already done backup it's fine but in scenarios like bootloop, struck at custom recovery logo etc you won't be able to recover existing internal data using recovery softwares or CMD or softwares as you're not booted in to Android OS, isn't that disappointing?

  

**[+ Tipatch - Now backup all your internal storage using TWRP.](https://www.techtracker.in/2023/06/tipatch-now-backup-all-your-internal.html)**

  

What if I say there is a way you can recover internal data that to without PC even if you're Android device is in bootloop or struck at custom recovery it will amazing isn't it? thought it's not full guaranteed workaround but it may work for that all you need is Bugjaegar, stock fastboot rom of your specific device which is basically original firmware that you can find on trusted platforms like XDA and custom recovery of your choice whichever work best on your device after that you have to simply extract all the .image files from fastboot stock rom and flash them one after one on Android device at the end flash and boot into custom recovery over there you can backup necessary internal data files to usb or sd card easily on go.

  

You may say why we have to specifically use fastboot rom image files because if you directly flash stock firmware, custom rom or GSI in most cases you won't be able to backup device data but when it comes to fastboot rom image files when you flash them one after one you can skip the image file named userdata which wipe your device data due to that your device will be not lost thought as said earlier it's not guaranteed but thing is extracting files from certain device fastboot rom require some external setup which are usually in OFTP or payload.bin format they won't let you extract using regular file managers even Mixplorer or Zarchiver instead you have to use some scripts or softwares like 

payload dumper for payload.bin on termux and for OFTP format we have to use MCT OFTP bypass software on PC, gotcha?

**[+ How to extract Android payload.bin to get image files using Termux.](https://www.techtracker.in/2023/06/how-to-extract-android-payloadbin-to.html)**

  

Now, you know why we flash fastboot rom image files this way to fix soft bricked Android devices and it's important to mention this is expermental method discovered and provided by geek [Sai Ponnamanda](https://youtube.com/@SaiPonnamanda) huge shout-out and thanks to him who saved a lot of Android users with this amazing tutorials make sure to definitely check him out and now before we continue to further into instructions do note in fastboot rom image files you'll find small and big files like system, vendor and product which can be flash instantly on PC but when it comes to Bugjaegar mobile adb on smartphones it may take more than 10 minutes to process and flash all image files so be patient and make sure you flashed all image files except userdata

so do you like it? are you interested in this method? If yes let's then explore more.

  

**• Bugjaeger official support •**

\- [Twitter](https://twitter.com/intent/follow?original_referer=https%253A%252F%252Fwww.sisik.eu%252Fabout&ref_src=twsrc%255Etfw%257Ctwcamp%255Ebuttonembed%257Ctwterm%255Efollow%257Ctwgr%255Esisikro&region=follow_link&screen_name=sisikro)

**Email : **[roman@sisik.eu](http://roman@sisik.eu/)

**Website : **[sisik.eu](http://www.sisik.eu/)

**• How to download Bugjaeger •**

It is very easy to download Bugjaeger from these platforms for free.

  

\- [Google Play ](https://play.google.com/store/apps/details?id=eu.sisik.hackendebug)

**• How to flash Android and unbrick device without PC using Bugjaegar •**

  

[![](https://blogger.googleusercontent.com/img/a/AVvXsEgG783h0dftIaFnetz3DAuk52EuTgEEe6Yk37RSRkvXm7O_E7dYtXZJT52hBKusNAZKpIzd7DRkDiOMQ0YM0WoGGCmZzcSQLIBJn6iIS888JrNlvSfsnrzqB2HNP9l6vQGESUre8t_Iy4pMSwKcjc6tOP4knaF73JJs7ZpfB7ePxS248ymz2jZ4JyoM4w)](https://blogger.googleusercontent.com/img/a/AVvXsEgG783h0dftIaFnetz3DAuk52EuTgEEe6Yk37RSRkvXm7O_E7dYtXZJT52hBKusNAZKpIzd7DRkDiOMQ0YM0WoGGCmZzcSQLIBJn6iIS888JrNlvSfsnrzqB2HNP9l6vQGESUre8t_Iy4pMSwKcjc6tOP4knaF73JJs7ZpfB7ePxS248ymz2jZ4JyoM4w)

  

\- On you're remote device, open payload folder and enter into output.

  

[![](https://blogger.googleusercontent.com/img/a/AVvXsEjRKu2JjB8E9lIn9EDds-ZK_oJJ-HtWUwuA_dNbiHVjdrbaatbWZpCk11ofPJC3gdWBls-DhHoD0GbgUO8sb_aKjHrbnYLQT7eOIpYTAeb2AYoX4J3QuPBOz1Z3kVmo0va40O2LoadqvI5yxXLE3qg5du-OGUpsH7R_30VJ3G4pT_ec43job7KVWl5K6A)](https://blogger.googleusercontent.com/img/a/AVvXsEjRKu2JjB8E9lIn9EDds-ZK_oJJ-HtWUwuA_dNbiHVjdrbaatbWZpCk11ofPJC3gdWBls-DhHoD0GbgUO8sb_aKjHrbnYLQT7eOIpYTAeb2AYoX4J3QuPBOz1Z3kVmo0va40O2LoadqvI5yxXLE3qg5du-OGUpsH7R_30VJ3G4pT_ec43job7KVWl5K6A)

  

[![](https://blogger.googleusercontent.com/img/a/AVvXsEihKMjE9oN2kEN-YTJsjbdyMgNPENYBasLib-KSJWrckIvH0kH_yrIZDB6OVmGmihKFzWGQc4C5s9aDz0WCI3xayoWPe96uHs2JJkAelt5TwMK1TE-yB1XE-bEylHaWnQrC27fnXmm9un-QUa4U8f1yt2if3PgWwlo1UOmGYkByUzziLkgkmNW7nRtUfA)](https://blogger.googleusercontent.com/img/a/AVvXsEihKMjE9oN2kEN-YTJsjbdyMgNPENYBasLib-KSJWrckIvH0kH_yrIZDB6OVmGmihKFzWGQc4C5s9aDz0WCI3xayoWPe96uHs2JJkAelt5TwMK1TE-yB1XE-bEylHaWnQrC27fnXmm9un-QUa4U8f1yt2if3PgWwlo1UOmGYkByUzziLkgkmNW7nRtUfA)

  

\- Here, you'll find extracted image files copy them to Internal storage.

**

[![](https://blogger.googleusercontent.com/img/a/AVvXsEj5nCpyXLp-FhDJc0r9Ts94jwg6tYnev1XQSI9dTFRGQhs9pP_TVqRG4s8FViXx7lAVarN51-cPOkdpG9m3gjp_93GShZ56DckIyFJHflHLTRTAoB05ql2I3QrmwhkrvBZq8KaULuifHCKQW0TxyqMx2SQbq_QIzTCZEYV_dXcvhEKO1QOBP1OdWBpk1Q)](https://blogger.googleusercontent.com/img/a/AVvXsEj5nCpyXLp-FhDJc0r9Ts94jwg6tYnev1XQSI9dTFRGQhs9pP_TVqRG4s8FViXx7lAVarN51-cPOkdpG9m3gjp_93GShZ56DckIyFJHflHLTRTAoB05ql2I3QrmwhkrvBZq8KaULuifHCKQW0TxyqMx2SQbq_QIzTCZEYV_dXcvhEKO1QOBP1OdWBpk1Q)

  
**

\- Now, first connect your Android device to external device using otg cable.

  

\- Open Bugjaegar, if it detected device and displayed name then tap on **<⚡>**  

**

[![](https://blogger.googleusercontent.com/img/a/AVvXsEgfkyQIEATYO-UvJ_SLssoxZYH2nwkBfIq-lGESEuYRCCYjVN0y8UXhY67rbTa3twFDFb10kocx7_FM9Aep3KKJvpwxFOqY9XXPOjEbDIc-bu_zhfu8NYAri_kVBX0YW4llce0J9dj1uWSNJT3KcYNdogUNj-G8jIEM1AYJtzB7pmkv7VrPC1VBe5erKQ)](https://blogger.googleusercontent.com/img/a/AVvXsEgfkyQIEATYO-UvJ_SLssoxZYH2nwkBfIq-lGESEuYRCCYjVN0y8UXhY67rbTa3twFDFb10kocx7_FM9Aep3KKJvpwxFOqY9XXPOjEbDIc-bu_zhfu8NYAri_kVBX0YW4llce0J9dj1uWSNJT3KcYNdogUNj-G8jIEM1AYJtzB7pmkv7VrPC1VBe5erKQ)

  
**

\- Enter and execute command **adb devices.**

**

[![](https://blogger.googleusercontent.com/img/a/AVvXsEjPUVBX1UNlJiYxgKiMlAI0JgqzbHNGwc8REkF7PWipEJUoy_joDf7zRiAxvO5BJJ2Ocds798UUcp1LKIocAQJVNhTpCDyMThJHzd5cKZUJ17AppIYbK8NUbC_ugJU2I3aNa0SfnQcjxLXBxdnz3b8_w0wUeJjx-bH1Yc_RoMqVgX7jomZwaZS9V9wdgw)](https://blogger.googleusercontent.com/img/a/AVvXsEjPUVBX1UNlJiYxgKiMlAI0JgqzbHNGwc8REkF7PWipEJUoy_joDf7zRiAxvO5BJJ2Ocds798UUcp1LKIocAQJVNhTpCDyMThJHzd5cKZUJ17AppIYbK8NUbC_ugJU2I3aNa0SfnQcjxLXBxdnz3b8_w0wUeJjx-bH1Yc_RoMqVgX7jomZwaZS9V9wdgw)

  
**

[![](https://blogger.googleusercontent.com/img/a/AVvXsEiGNsnsFwF_Hp9UIPaBedpcL5p0DNcO-y4QrJ4FAAijng_Ni8Z5i79EXspXqkfXnTCZA_q_OXKFM_SuQSHNAzZcszEzd_MLF_seGpE7QM1y_Bad-_I78fbJ8xvG6-SFQ4cJ1g0wZAAk8Zf-r_WxUXaIXsSupHVvzfnv7lviS3z8dDgZu0ADN-0K2nilbg)](https://blogger.googleusercontent.com/img/a/AVvXsEiGNsnsFwF_Hp9UIPaBedpcL5p0DNcO-y4QrJ4FAAijng_Ni8Z5i79EXspXqkfXnTCZA_q_OXKFM_SuQSHNAzZcszEzd_MLF_seGpE7QM1y_Bad-_I78fbJ8xvG6-SFQ4cJ1g0wZAAk8Zf-r_WxUXaIXsSupHVvzfnv7lviS3z8dDgZu0ADN-0K2nilbg)

  

\- Enter and execute command **adb reboot bootloader.**

**

[![](https://blogger.googleusercontent.com/img/a/AVvXsEjiRodYD5xLug-SF_q84G5183iLTaHjD8QJLq9a7sx2kdfeK4iEGXPmrtziYllFzX-mDn52_wHIaQGSMhWVzvxqrBLxdr8V0cKBFeW_4QIeSkFp_0nfzTRcaMuFMVponFM5Ofk8TfpXCJ7LIXW-c4kMd_loRHs75kvhrChoyYeCknr6lM4QyHZ95Rn9nw)](https://blogger.googleusercontent.com/img/a/AVvXsEjiRodYD5xLug-SF_q84G5183iLTaHjD8QJLq9a7sx2kdfeK4iEGXPmrtziYllFzX-mDn52_wHIaQGSMhWVzvxqrBLxdr8V0cKBFeW_4QIeSkFp_0nfzTRcaMuFMVponFM5Ofk8TfpXCJ7LIXW-c4kMd_loRHs75kvhrChoyYeCknr6lM4QyHZ95Rn9nw)

  
**

\- You're in fastboot mode.

  

\- Here, you have to flash image files of your firmware one after one so as said earlier make sure you put all of them in main internal storage not in any specific folder or sub folder etc so that you won't face any kind of issues later on.

  

[![](https://blogger.googleusercontent.com/img/a/AVvXsEieZOvLMN6hWAE8z-Bqw-99p67GYixoF2VrL9ZRU0WVXVDwpe4SLHtAjbuxcd4ni0k48RL5dKruMBt95A_kicv0XwyubDjr6B7XO2VBoVPKpSUPUawFAhb4Us5u0pkLX-e-Ume83ckxXKw3UhjGi0RkTNGOrQUB7X7KDvqEB9fAlDzFjEzdFPb3gb48Sg)](https://blogger.googleusercontent.com/img/a/AVvXsEieZOvLMN6hWAE8z-Bqw-99p67GYixoF2VrL9ZRU0WVXVDwpe4SLHtAjbuxcd4ni0k48RL5dKruMBt95A_kicv0XwyubDjr6B7XO2VBoVPKpSUPUawFAhb4Us5u0pkLX-e-Ume83ckxXKw3UhjGi0RkTNGOrQUB7X7KDvqEB9fAlDzFjEzdFPb3gb48Sg)

  

\- Enter command fastboot flash your image file name then tap on pin icon to add that image file and then execute it.

  

\- You have to do as said above for each and every image file until they're over.

  

\- Once you flashed all image files except userbase image file it's time to flash custom recovery of your device.

  

[![](https://blogger.googleusercontent.com/img/a/AVvXsEjPNBNq7oyW8m94juUVeYzeImCUm_OZ4p-G73xl_QGDPBZ5qPgJUUR3ZSI0uY1E6gL0tH8i0FFMOPxAhkjXJGf8-S09MMhUeYmsLwIW7jjNgnP40SjoCtRT7nhA4oAjxkaN0Hd3aGRWDPZkHQ-ZCRq1FDAvDcpl7cYmjfiVnfS6Dhwuxfq00AkS7h0hIw)](https://blogger.googleusercontent.com/img/a/AVvXsEjPNBNq7oyW8m94juUVeYzeImCUm_OZ4p-G73xl_QGDPBZ5qPgJUUR3ZSI0uY1E6gL0tH8i0FFMOPxAhkjXJGf8-S09MMhUeYmsLwIW7jjNgnP40SjoCtRT7nhA4oAjxkaN0Hd3aGRWDPZkHQ-ZCRq1FDAvDcpl7cYmjfiVnfS6Dhwuxfq00AkS7h0hIw)

  

\- Don't reboot, now enter and execute command adb reboot bootloader or manually use power and volume buttons based on device to get into bootloader.

  

[![](https://blogger.googleusercontent.com/img/a/AVvXsEhCsBhdjK_q-O7E6szcG80jzaWG7TWF8LQoQ7MQi2Vaw3KDcKaJS7XaIZBOC8ajtGBV4WSCTqQcy6uG15ohNHuflaL-wZAcxEZO1len4YU0Tdk9rAsrEGOm1d-dQ4oiTvJPU83--HsjCWB3ULcioOOZoJAt9FWGmr1trX90DPh9dn_Pc9IHJ-WxAKmxJA)](https://blogger.googleusercontent.com/img/a/AVvXsEhCsBhdjK_q-O7E6szcG80jzaWG7TWF8LQoQ7MQi2Vaw3KDcKaJS7XaIZBOC8ajtGBV4WSCTqQcy6uG15ohNHuflaL-wZAcxEZO1len4YU0Tdk9rAsrEGOm1d-dQ4oiTvJPU83--HsjCWB3ULcioOOZoJAt9FWGmr1trX90DPh9dn_Pc9IHJ-WxAKmxJA)

  

[![](https://blogger.googleusercontent.com/img/a/AVvXsEiOKacUVJFwbGJVa-0Oj4JCzBXwnMEsWx97RRGQ62HLAq7dk7355S-pssnc430ZH26CLRPQVUVyY0NUFUt8mEzzCO-H1-WYBdX4D-g0F7k1nwbVJftYSZY2ghqSdx_vjKql2LfjLT-i9XHLGazWk-Cm6Fb0pP0bCF87XB-Pqn3VU9HamZti9Wh4Kq1kdQ)](https://blogger.googleusercontent.com/img/a/AVvXsEiOKacUVJFwbGJVa-0Oj4JCzBXwnMEsWx97RRGQ62HLAq7dk7355S-pssnc430ZH26CLRPQVUVyY0NUFUt8mEzzCO-H1-WYBdX4D-g0F7k1nwbVJftYSZY2ghqSdx_vjKql2LfjLT-i9XHLGazWk-Cm6Fb0pP0bCF87XB-Pqn3VU9HamZti9Wh4Kq1kdQ)

  

\- Enter and execute command **fastboot reboot fastboot **or manually use power and volume buttons based on device to get into fastboot.

  

[![](https://blogger.googleusercontent.com/img/a/AVvXsEg8Iho4FEJtI1Fd107aIKWpGArjuocoyO5zQ1Pgp2kBHP1ITWtlNLm5FDVa9DIzEm7bT6ysoRHMYhoOa0RsJlSKAcwKOghwk5Hopo0GkKRJAsst1cs05pdVOKv6eQd0ixQLYEobXRW6welkS2kn_W9EZYO1oyXikyhxf2jhgx-QThTn--L3gkClsNt_lw)](https://blogger.googleusercontent.com/img/a/AVvXsEg8Iho4FEJtI1Fd107aIKWpGArjuocoyO5zQ1Pgp2kBHP1ITWtlNLm5FDVa9DIzEm7bT6ysoRHMYhoOa0RsJlSKAcwKOghwk5Hopo0GkKRJAsst1cs05pdVOKv6eQd0ixQLYEobXRW6welkS2kn_W9EZYO1oyXikyhxf2jhgx-QThTn--L3gkClsNt_lw)

  

\- Here, enter fastboot flash recovery, then tap on pin icon to add recovery.img file from internal storage, sd card or otg then execute command it will flash instantly.

  

[![](https://blogger.googleusercontent.com/img/a/AVvXsEgJkZVIWw-PKyhGZXu3NOK5E4kkhJ9a_vZi9Z2eG5Io-b5Ir7vINpVHK0SCUwDWVJeFCO2f6QQADaT2OGTlqXR0mhQLfQUi1PZH3550SZ3UJ-dmrkfUrOu052J8YZWRltlpArMRUist-sErit0x2GIJY_-V4mdn9D98BsPBqcDLF5_3vQ76wLXd6H7OLA)](https://blogger.googleusercontent.com/img/a/AVvXsEgJkZVIWw-PKyhGZXu3NOK5E4kkhJ9a_vZi9Z2eG5Io-b5Ir7vINpVHK0SCUwDWVJeFCO2f6QQADaT2OGTlqXR0mhQLfQUi1PZH3550SZ3UJ-dmrkfUrOu052J8YZWRltlpArMRUist-sErit0x2GIJY_-V4mdn9D98BsPBqcDLF5_3vQ76wLXd6H7OLA)

  

\- Enter and execute command **fastboot reboot recovery.**

  

[![](https://blogger.googleusercontent.com/img/a/AVvXsEg8avB8kE41FqUjiEVdKYsDZGMsFUuNGTddUvoq8KygKSGjUjNB8nLt8hhChpVfhbOFTuZzglED1-oPtzKu9F7gMQNKclfivjeCUzR8pjUiZ8nIIgNBS6iqqTprD2c_Qun1rwh0pGh49U9e9ezV2D-auwIOC5eQQ9o77X_wcEtfUhDiN6Tx1TLTbq6bEQ)](https://blogger.googleusercontent.com/img/a/AVvXsEg8avB8kE41FqUjiEVdKYsDZGMsFUuNGTddUvoq8KygKSGjUjNB8nLt8hhChpVfhbOFTuZzglED1-oPtzKu9F7gMQNKclfivjeCUzR8pjUiZ8nIIgNBS6iqqTprD2c_Qun1rwh0pGh49U9e9ezV2D-auwIOC5eQQ9o77X_wcEtfUhDiN6Tx1TLTbq6bEQ)

  

\- Here, I'm using PitchBlack recovery, you can use the one you like.

  

\- Tap on **Advanced.**

**

[![](https://blogger.googleusercontent.com/img/a/AVvXsEjcpUj5fS1el0xqWuTs9qQ6DauIma0zZnBoHMT6t8CMStPYjlbNNjD7VKexNsgJv7bJLEpEJIsWb-7m8l0Dr5DIcn-wlGWWPLBz04suCGa5vbm88IkG8jjsRBM_b0pgJCwO0hK-VR-EXSGeU3pWh5c6fTAyP1qMElhzf1c9VdFvmiGFo2dquZuSXKg9HQ)](https://blogger.googleusercontent.com/img/a/AVvXsEjcpUj5fS1el0xqWuTs9qQ6DauIma0zZnBoHMT6t8CMStPYjlbNNjD7VKexNsgJv7bJLEpEJIsWb-7m8l0Dr5DIcn-wlGWWPLBz04suCGa5vbm88IkG8jjsRBM_b0pgJCwO0hK-VR-EXSGeU3pWh5c6fTAyP1qMElhzf1c9VdFvmiGFo2dquZuSXKg9HQ)

  
**

\- Tap on File Manager, there you can copy necessary folders to SD card, PC, OTG etc.

  

\- You can also use backup option but that will only backup system and user apps not media like pictures, videos, documents etc but you can enable that facility for that you just have to patch TWRP using Tipatch.

  

\- But, I recommend copying of each folder through in advanced, file manager.

  

Note : in some cases you won't be able to boot into custom recovery in that case you may not be able to backup data but you may definitely unbrick device for sure.

  

If you are able to boot into custom recovery and already done device data backup using advanced file manager or Tipatch etc in that case you can simply wipe system, dalvik, data, cache on custom recovery and flash your device custom roms but thing is some Android smartphones due to various different reasons lack developement from developers from trusted platforms like XDA due to that they lack custom roms but in order to fix this we have project Treble that provide GSI aka generic system image which is basically pure implementation of Android without code changes created by Google so that any old or new device can run the latest Android versions without involvement of device makers so at the end if your device is treble supported then you can flash awesome GSIs on custom recovery. 

Project Treble introduced back in Android 8.0 Oreo at that time to keep things simple for firmware Google concise and packed whatever things required to run OS in 3 image files which are system, vendor, product packed into super.img which is known as dynamic partition thanks to that we can simply change corrupted image file with others in super.img to fix device flexibly as soon as possible including that it can switch slots in A/B slot devices but thing is if you're device is not Android 8.0 and don't support Treble by default then you may not be able to flash GSIs in that case there are unofficial ways to get treble support thought you may try them but it's always better to stick with stock firmware on old devices as on them we have quite old vendor which is not enough to run the latest gsis due to that you may get or find many bugs which makes device unusable and may let you use it full fledgedly.

  

 [![](https://blogger.googleusercontent.com/img/a/AVvXsEhh6-SSSBCVFlvAPqWPTypuLT7Bn9lksMmziEl0lFn--7KLuxEYLvpCjd0MEr6eM2IMUa0LyKzTHY8vWq20Y1v9XtpIaZlqbLd68jDJ3xfzm09sLG6GMNT5opToJ_FFm2M42uSFWW-qZvdOP04PGEEEcgt_5wnrcZArzCnZGCus8maZl24aerAz3dAPxvc-)](https://blogger.googleusercontent.com/img/a/AVvXsEhh6-SSSBCVFlvAPqWPTypuLT7Bn9lksMmziEl0lFn--7KLuxEYLvpCjd0MEr6eM2IMUa0LyKzTHY8vWq20Y1v9XtpIaZlqbLd68jDJ3xfzm09sLG6GMNT5opToJ_FFm2M42uSFWW-qZvdOP04PGEEEcgt_5wnrcZArzCnZGCus8maZl24aerAz3dAPxvc-) 

  

\- If you have no custom ROM or GSI and decided to stick with stock firmware then enter and execute command adb reboot bootloader or manually use power volume up or down buttons to get into bootloader or fastboot mode on Xiaomi devices.

  

 [![](https://blogger.googleusercontent.com/img/a/AVvXsEg9t_HShfYnAZQx3ch44KXcfO2VZuMgtheakyafqWSh9D2302upd-xq9U6q_ZXX-xC5N_OXk8MoUyDxUyfX-i0RRAQX-OvwVjA8qZfiTSue1PwMAI7ofvaTXl9Zhrc17RrCsgM1LEFoonBG7WaNwl9k3T8_AbjLlslFZyOq0M_8b_FIKbNHhLlNLVOMKRF7)](https://blogger.googleusercontent.com/img/a/AVvXsEg9t_HShfYnAZQx3ch44KXcfO2VZuMgtheakyafqWSh9D2302upd-xq9U6q_ZXX-xC5N_OXk8MoUyDxUyfX-i0RRAQX-OvwVjA8qZfiTSue1PwMAI7ofvaTXl9Zhrc17RrCsgM1LEFoonBG7WaNwl9k3T8_AbjLlslFZyOq0M_8b_FIKbNHhLlNLVOMKRF7) 

  

\- Enter command fastboot flash recovery then tap on pin icon right on top add that stock recovery.img file and execute it.

  

That's it, you successfully unbricked device turn on device using power button but remember if you have xiaomi or redmi device and it's not booting into os then go to bootloader then wipe system and cache and power on this time it'll work like charm and surely may boot device into OS.

  

Eventhough, almost all old and new  smartphones have stock firmware basically fastboot rom but there are some smartphones which stock firmware is not available online including that there is chance that device doesn't even have single custom ROM or support GSIs in that case you may have to find that fastboot rom on some paid platforms where you can buy and get them but in case you don't find them over there as well then there is no way you may definitely have to go to official service center where they usually have your device stock firmware as they're connected to official makers but they usually don't backup device data and charge you keep that in mind and proceed further on as there is no better choice.

  

Finally, this is how you can unbrick your soft bricked Android devices using stock firmware fastboot rom without PC on Android using Bugjaegar mobile ADB otg, are you an existing user of this method? If yes do say your experience and mention if you know any better way to unbrick soft bricked Android device without PC in our comment section below, see ya :)