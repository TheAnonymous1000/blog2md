---
title: 'How to create free self hosting URL shortener using Cloudflare.'
date: 2022-05-01T12:00:00.000+05:30
draft: false
url: /2022/05/how-to-create-free-self-hosting-url.html
tags: 
- How
- technology
- Create
- Cloudflare
- URL Shortener
---

 [![](https://lh3.googleusercontent.com/-4LmEvVI6tX0/Ym7jsZF2U-I/AAAAAAAAKlI/vIUixsNGtfQ4L7Odrihhc8g1s0Ht1vQbACNcBGAsYHQ/s1600/1651434413752944-0.png)](https://lh3.googleusercontent.com/-4LmEvVI6tX0/Ym7jsZF2U-I/AAAAAAAAKlI/vIUixsNGtfQ4L7Odrihhc8g1s0Ht1vQbACNcBGAsYHQ/s1600/1651434413752944-0.png) 

  

  

  

Long links not only lengthy in characters  but also look bad when you want to share them with your social networks followers or friends etc, isn't? while short links look cute and doesn't occupy much space on your social media posts, that's why most people like to shorten thier length long links using URL shorteners.  

  

URL shorteners are everywhere, most popular social networks like YouTube, Facebook and Twitter etc use thier own API to shorten long links, and now a days people and influencers like bloggers and marketing teams also started using URL shortners thanks to free URL shortening services like Bit.ly, Rebrand.ly, Ow.ly etc.

  

Kevin Gilbertson created first ever URL shortener named Tinyurl In 2002 from then many people and companies like Google also created thier own URL shortners but only from past few years the usage of URL shortners got exponential growth due to increase of internet users.

  

We are moving towards security and privacy focused Web3 decentralized internet but still most URL shortening platforms use centralised servers which are less secure and vulnerable to attacks like DDos and brueforce etc that can steal your personal data.

  

Anyhow, to fix this problem recently we found an method to create self hosted url shortening site using Cloudflare which not only provide you fast url shortener but also protect and secure your url shortener from all types of attacks, so do you like it? are you interested? If yes let's begin.

**• How to create self hosting URL shortner using Cloudflare for free •**

 **[![](https://lh3.googleusercontent.com/-L_PdmoIPwTY/Ym7jrU5ucmI/AAAAAAAAKlE/gsAMYD5VYhkZVJMMK8PTsabSCe6ZYRFMwCNcBGAsYHQ/s1600/1651434409545946-1.png)](https://lh3.googleusercontent.com/-L_PdmoIPwTY/Ym7jrU5ucmI/AAAAAAAAKlE/gsAMYD5VYhkZVJMMK8PTsabSCe6ZYRFMwCNcBGAsYHQ/s1600/1651434409545946-1.png)**   

\- Go to [Cloudflare.com](https://dash.cloudflare.com/login), sign up and login then add your website.

  

[\+ How to add cloudflare on blogger to optimize and stop bot traffic.](https://www.techtracker.in/2021/12/how-to-add-cloudflare-on-blogger-to.html)

  

 [![](https://lh3.googleusercontent.com/-csOpx22q71A/Ym7jqT_Rc5I/AAAAAAAAKlA/TvxnmErkyc8vOIlFppozyOTtS0-2xwYfQCNcBGAsYHQ/s1600/1651434405753839-2.png)](https://lh3.googleusercontent.com/-csOpx22q71A/Ym7jqT_Rc5I/AAAAAAAAKlA/TvxnmErkyc8vOIlFppozyOTtS0-2xwYfQCNcBGAsYHQ/s1600/1651434405753839-2.png) 

  

\- Once, your website is added on Cloudflare, simply go to dashboard then tap on **≡**

 **[![](https://lh3.googleusercontent.com/-S2L5LDO02ro/Ym7jpSvDMrI/AAAAAAAAKk8/_HgvGex6eQYh4t5LrGAaJMaGpVPDAqrlgCNcBGAsYHQ/s1600/1651434401671888-3.png)](https://lh3.googleusercontent.com/-S2L5LDO02ro/Ym7jpSvDMrI/AAAAAAAAKk8/_HgvGex6eQYh4t5LrGAaJMaGpVPDAqrlgCNcBGAsYHQ/s1600/1651434401671888-3.png)** 

\- Tap on Workers drop-down menu then tap on **KV**

 **[![](https://lh3.googleusercontent.com/-cOVFTfLGmSQ/Ym7joQQ0ysI/AAAAAAAAKk4/1f6oyRHNFt08Jlfk9tG9tQVAzG-HAoXQwCNcBGAsYHQ/s1600/1651434397894956-4.png)](https://lh3.googleusercontent.com/-cOVFTfLGmSQ/Ym7joQQ0ysI/AAAAAAAAKk4/1f6oyRHNFt08Jlfk9tG9tQVAzG-HAoXQwCNcBGAsYHQ/s1600/1651434397894956-4.png)** 

\- Tap on **Create namespace**

 **[![](https://lh3.googleusercontent.com/-HmWaFQ6tEOA/Ym7jnU_w07I/AAAAAAAAKk0/w4FiQl91v0Ur7NXPygj4zV5Cnkg8O41AACNcBGAsYHQ/s1600/1651434393859281-5.png)](https://lh3.googleusercontent.com/-HmWaFQ6tEOA/Ym7jnU_w07I/AAAAAAAAKk0/w4FiQl91v0Ur7NXPygj4zV5Cnkg8O41AACNcBGAsYHQ/s1600/1651434393859281-5.png)** 

\- Enter your preferred Namespace Name then tap on **Add**

 **[![](https://lh3.googleusercontent.com/-NycNYFG41e4/Ym7jmQimOJI/AAAAAAAAKkw/P1wV3Xq4vVc7jVcAYVNt9r9yi5p2r8wKwCNcBGAsYHQ/s1600/1651434390203815-6.png)](https://lh3.googleusercontent.com/-NycNYFG41e4/Ym7jmQimOJI/AAAAAAAAKkw/P1wV3Xq4vVc7jVcAYVNt9r9yi5p2r8wKwCNcBGAsYHQ/s1600/1651434390203815-6.png)** \- Once, created tap on **View**

 [![](https://lh3.googleusercontent.com/-g7M0lLiwfpA/Ym7jlelqDbI/AAAAAAAAKks/_zcT_n5rzkYuBhQdRofuRyhBdPRSnUR-ACNcBGAsYHQ/s1600/1651434386589497-7.png)](https://lh3.googleusercontent.com/-g7M0lLiwfpA/Ym7jlelqDbI/AAAAAAAAKks/_zcT_n5rzkYuBhQdRofuRyhBdPRSnUR-ACNcBGAsYHQ/s1600/1651434386589497-7.png) 

\- Here, you can see just Namespace ID is created but no key and value entries, it's fine you'll get them later on.

  

\- Tap on **≡**

 **[![](https://lh3.googleusercontent.com/-lXX2v7B9-sQ/Ym7jkXBJISI/AAAAAAAAKko/169tdmpcFYA9gHdTpYCgGxHkSvvxvCkJACNcBGAsYHQ/s1600/1651434382427434-8.png)](https://lh3.googleusercontent.com/-lXX2v7B9-sQ/Ym7jkXBJISI/AAAAAAAAKko/169tdmpcFYA9gHdTpYCgGxHkSvvxvCkJACNcBGAsYHQ/s1600/1651434382427434-8.png)** 

\- Tap on **Workers**

 **[![](https://lh3.googleusercontent.com/-bwAcRXeJAKw/Ym7jjUNnQ5I/AAAAAAAAKkk/O8VgMzq2MtYMA4tcc81JZZEGKc6kKlnUwCNcBGAsYHQ/s1600/1651434378524998-9.png)](https://lh3.googleusercontent.com/-bwAcRXeJAKw/Ym7jjUNnQ5I/AAAAAAAAKkk/O8VgMzq2MtYMA4tcc81JZZEGKc6kKlnUwCNcBGAsYHQ/s1600/1651434378524998-9.png)** 

\- Tap on **Create a Service**

 **[![](https://lh3.googleusercontent.com/-mk2yGbZRlOQ/Ym7jilOuLwI/AAAAAAAAKkg/r7UGqQAEKFggqPeyyaV4jmdVFlRSdHSBwCNcBGAsYHQ/s1600/1651434374838709-10.png)](https://lh3.googleusercontent.com/-mk2yGbZRlOQ/Ym7jilOuLwI/AAAAAAAAKkg/r7UGqQAEKFggqPeyyaV4jmdVFlRSdHSBwCNcBGAsYHQ/s1600/1651434374838709-10.png)** 

\- Enter your preferred Service name then scroll down.

  

 [![](https://lh3.googleusercontent.com/-u_7pyRMIEJA/Ym7jhV2sRII/AAAAAAAAKkc/VHfTqJIEZ7sKRbN2h2KZOGkQmUenigXNgCNcBGAsYHQ/s1600/1651434371023620-11.png)](https://lh3.googleusercontent.com/-u_7pyRMIEJA/Ym7jhV2sRII/AAAAAAAAKkc/VHfTqJIEZ7sKRbN2h2KZOGkQmUenigXNgCNcBGAsYHQ/s1600/1651434371023620-11.png) 

\- Tap on **Create service**

 **[![](https://lh3.googleusercontent.com/--TeLOyH9-i4/Ym7jgn3snpI/AAAAAAAAKkY/Ulcex3P-QisZO0NAMjleey53oiix_JuZQCNcBGAsYHQ/s1600/1651434367095166-12.png)](https://lh3.googleusercontent.com/--TeLOyH9-i4/Ym7jgn3snpI/AAAAAAAAKkY/Ulcex3P-QisZO0NAMjleey53oiix_JuZQCNcBGAsYHQ/s1600/1651434367095166-12.png)** 

  

\- Here, Tap on **Settings** and **Variables** then scroll down.

  

 [![](https://lh3.googleusercontent.com/-sfT23ViLvHM/Ym7jfhTQEtI/AAAAAAAAKkQ/wZjy2fk91ygzUD2zy1wNaBnD-EiiDZKcwCNcBGAsYHQ/s1600/1651434362359824-13.png)](https://lh3.googleusercontent.com/-sfT23ViLvHM/Ym7jfhTQEtI/AAAAAAAAKkQ/wZjy2fk91ygzUD2zy1wNaBnD-EiiDZKcwCNcBGAsYHQ/s1600/1651434362359824-13.png) 

  

\- In KV Namespace Bindings, tap on **Add binding **

 **[![](https://lh3.googleusercontent.com/-wWxENE77BDY/Ym7jebyWvOI/AAAAAAAAKkM/RwlD_KeUPYQ3WoAlJ-5NiRWjsmKzw7zIwCNcBGAsYHQ/s1600/1651434354997281-14.png)](https://lh3.googleusercontent.com/-wWxENE77BDY/Ym7jebyWvOI/AAAAAAAAKkM/RwlD_KeUPYQ3WoAlJ-5NiRWjsmKzw7zIwCNcBGAsYHQ/s1600/1651434354997281-14.png)** 

\- Enter Variable name : LINKS and select KV Namespace name which you created earlier for url shortener from drop-down menu then tap on **Save** \[ Must \]

  

 [![](https://lh3.googleusercontent.com/-mlhKPsaC_9U/Ym7jchU1G9I/AAAAAAAAKkI/x-6XiWHY7lYDIwoPG5exmmBdf1bmpZ_GwCNcBGAsYHQ/s1600/1651434350088803-15.png)](https://lh3.googleusercontent.com/-mlhKPsaC_9U/Ym7jchU1G9I/AAAAAAAAKkI/x-6XiWHY7lYDIwoPG5exmmBdf1bmpZ_GwCNcBGAsYHQ/s1600/1651434350088803-15.png) 

  

  

\- Go back, In Resources tap on **Quick edit**

 **[![](https://lh3.googleusercontent.com/-gyBTerkzj8o/Ym7jbX0pvyI/AAAAAAAAKkA/hAly0iISB7YyU9UAgq2cWqoRtRSFJtZcACNcBGAsYHQ/s1600/1651434344947903-16.png)](https://lh3.googleusercontent.com/-gyBTerkzj8o/Ym7jbX0pvyI/AAAAAAAAKkA/hAly0iISB7YyU9UAgq2cWqoRtRSFJtZcACNcBGAsYHQ/s1600/1651434344947903-16.png)** 

\- Go to [github.com/xyTom/Url-Shorten-Worker](http://github.com/xyTom/Url-Shorten-Worker) then fork repository.

  

 [![](https://lh3.googleusercontent.com/-fMl8NgIAGlU/Ym7jZ1M-NlI/AAAAAAAAKj8/eMlX1RRhw1sq0EB7ht_oCQhRbrew5k4WACNcBGAsYHQ/s1600/1651434337929965-17.png)](https://lh3.googleusercontent.com/-fMl8NgIAGlU/Ym7jZ1M-NlI/AAAAAAAAKj8/eMlX1RRhw1sq0EB7ht_oCQhRbrew5k4WACNcBGAsYHQ/s1600/1651434337929965-17.png) 

  

\- Enter Repository name, Description then tap on **Create fork**

  

 [![](https://lh3.googleusercontent.com/-IBquwk3YS3I/Ym7jYbFab_I/AAAAAAAAKj0/F52MwbkyJP4eipnAdTZ2dLwrV7FVess6gCNcBGAsYHQ/s1600/1651434332156350-18.png)](https://lh3.googleusercontent.com/-IBquwk3YS3I/Ym7jYbFab_I/AAAAAAAAKj0/F52MwbkyJP4eipnAdTZ2dLwrV7FVess6gCNcBGAsYHQ/s1600/1651434332156350-18.png) 

  

\- Tap on **View code**

 **[![](https://lh3.googleusercontent.com/-X_FIzPsBvLY/Ym7jW6szlBI/AAAAAAAAKjw/HkhaRdzoOdclS0mmRQPKLrRzaC5rPkFAACNcBGAsYHQ/s1600/1651434328227086-19.png)](https://lh3.googleusercontent.com/-X_FIzPsBvLY/Ym7jW6szlBI/AAAAAAAAKjw/HkhaRdzoOdclS0mmRQPKLrRzaC5rPkFAACNcBGAsYHQ/s1600/1651434328227086-19.png)** 

\- Tap on **index.js**

  

 [![](https://lh3.googleusercontent.com/-H7US2BL5QpU/Ym7jV6X_3PI/AAAAAAAAKjs/aJlRnGwW0p8qKVSgIgRTTmWo8kmNIQ2YwCNcBGAsYHQ/s1600/1651434321756014-20.png)](https://lh3.googleusercontent.com/-H7US2BL5QpU/Ym7jV6X_3PI/AAAAAAAAKjs/aJlRnGwW0p8qKVSgIgRTTmWo8kmNIQ2YwCNcBGAsYHQ/s1600/1651434321756014-20.png) 

  

\- Copy all code of Index.js, then head back to Cloudflare.

  

 [![](https://lh3.googleusercontent.com/-CZ4XYoEONnw/Ym7jUF38a3I/AAAAAAAAKjo/dkaB358jZPMGN7g-GhVJBwxqgjnebaNegCNcBGAsYHQ/s1600/1651434316041138-21.png)](https://lh3.googleusercontent.com/-CZ4XYoEONnw/Ym7jUF38a3I/AAAAAAAAKjo/dkaB358jZPMGN7g-GhVJBwxqgjnebaNegCNcBGAsYHQ/s1600/1651434316041138-21.png) 

  

\- Remove existing code and paste Index.js code then tap on **Save and Deploy**

  

 [![](https://lh3.googleusercontent.com/-Gd5rAoWspPg/Ym7jSrGB0CI/AAAAAAAAKjk/H_QmSLD_rRQTbE5SROeem9WSAScDkdQ6gCNcBGAsYHQ/s1600/1651434309294215-22.png)](https://lh3.googleusercontent.com/-Gd5rAoWspPg/Ym7jSrGB0CI/AAAAAAAAKjk/H_QmSLD_rRQTbE5SROeem9WSAScDkdQ6gCNcBGAsYHQ/s1600/1651434309294215-22.png) 

  

\- Tap on **Save and Deploy** again.

  

 [![](https://lh3.googleusercontent.com/-BVRd_hwQOWg/Ym7jRE05o4I/AAAAAAAAKjg/wQZISYcWR6ooKtF84-LeNbzfeR6baCdDACNcBGAsYHQ/s1600/1651434304179553-23.png)](https://lh3.googleusercontent.com/-BVRd_hwQOWg/Ym7jRE05o4I/AAAAAAAAKjg/wQZISYcWR6ooKtF84-LeNbzfeR6baCdDACNcBGAsYHQ/s1600/1651434304179553-23.png) 

  

  

\- Go back, Tap on **≡** then tap on **DNS**

  

 [![](https://lh3.googleusercontent.com/-BzsF5WdKC7I/Ym7jPg2zYQI/AAAAAAAAKjc/Jjpl96kI-9UBmx5abe7ZKISYYXUCfkyCwCNcBGAsYHQ/s1600/1651434298023477-24.png)](https://lh3.googleusercontent.com/-BzsF5WdKC7I/Ym7jPg2zYQI/AAAAAAAAKjc/Jjpl96kI-9UBmx5abe7ZKISYYXUCfkyCwCNcBGAsYHQ/s1600/1651434298023477-24.png) 

  

\- Tap on **\+ Add record**

 **[![](https://lh3.googleusercontent.com/-EJzTdPIAIbM/Ym7jOF6akfI/AAAAAAAAKjY/Ynd3tM4DrRwgKy-lzvVkaosWYA5Li1euwCNcBGAsYHQ/s1600/1651434292561681-25.png)](https://lh3.googleusercontent.com/-EJzTdPIAIbM/Ym7jOF6akfI/AAAAAAAAKjY/Ynd3tM4DrRwgKy-lzvVkaosWYA5Li1euwCNcBGAsYHQ/s1600/1651434292561681-25.png)** 

\- Enter your preferred sub-domain name, and IPv4 address : 192.0.2.0 or you can also use other dns record IPv4 address, if by any chance this not worked.

  

\- Tap on **Save**

 **[![](https://lh3.googleusercontent.com/-n1YL7_MM4vY/Ym7jM5sJLNI/AAAAAAAAKjU/nPlSwxXPsbwJngAI8kBBrk2RGlu-bWVBwCNcBGAsYHQ/s1600/1651434287275980-26.png)](https://lh3.googleusercontent.com/-n1YL7_MM4vY/Ym7jM5sJLNI/AAAAAAAAKjU/nPlSwxXPsbwJngAI8kBBrk2RGlu-bWVBwCNcBGAsYHQ/s1600/1651434287275980-26.png)** 

\- Go back to Workers, then tap on **Add route**

 **[![](https://lh3.googleusercontent.com/-egoyLMyE0Rs/Ym7jLhHFlSI/AAAAAAAAKjQ/ihCDu3FDZdAAlb1bKnjheLfCOFw6LepDwCNcBGAsYHQ/s1600/1651434281891520-27.png)](https://lh3.googleusercontent.com/-egoyLMyE0Rs/Ym7jLhHFlSI/AAAAAAAAKjQ/ihCDu3FDZdAAlb1bKnjheLfCOFw6LepDwCNcBGAsYHQ/s1600/1651434281891520-27.png)** 

\- Replace my website with yours, and select Service, Environment then tap on **Save**

 **[![](https://lh3.googleusercontent.com/-b8v37vxin8w/Ym7jKU0YM1I/AAAAAAAAKjM/_vMvccczqvg2UO2htzBt4IXszABvDSNKACNcBGAsYHQ/s1600/1651434277139964-28.png)](https://lh3.googleusercontent.com/-b8v37vxin8w/Ym7jKU0YM1I/AAAAAAAAKjM/_vMvccczqvg2UO2htzBt4IXszABvDSNKACNcBGAsYHQ/s1600/1651434277139964-28.png)** 

\- Woohoo, Go to your URL shortener sub domain that we just created now and paste your long link in blank.

  

\- Tap on  **Shorten it,** You'll get short link.

  

 [![](https://lh3.googleusercontent.com/-QmDeOBRYVAM/Ym7jJCCn5AI/AAAAAAAAKjI/Od3bUExqtKIJkyJ-ArE_3nZ7UwOUMXZ-QCNcBGAsYHQ/s1600/1651434272596162-29.png)](https://lh3.googleusercontent.com/-QmDeOBRYVAM/Ym7jJCCn5AI/AAAAAAAAKjI/Od3bUExqtKIJkyJ-ArE_3nZ7UwOUMXZ-QCNcBGAsYHQ/s1600/1651434272596162-29.png) 

  

\- To check details of shortlink.

  

\-  Go to [Cloudflare Workers KV](https://dash.cloudflare.com/workers/kv/namespaces), where you will get key and value which you can view, edit and delete, isn't amazing?

** • How to edit URL shortener website • **

 **[![](https://lh3.googleusercontent.com/-m4QsNLxBAuI/Ym7jH9A0wvI/AAAAAAAAKjE/b8FyW1nyl-A2n2m00-ZJs0X3rjtHp1dBwCNcBGAsYHQ/s1600/1651434266839551-30.png)](https://lh3.googleusercontent.com/-m4QsNLxBAuI/Ym7jH9A0wvI/AAAAAAAAKjE/b8FyW1nyl-A2n2m00-ZJs0X3rjtHp1dBwCNcBGAsYHQ/s1600/1651434266839551-30.png)** 

\- Go to your forked repository of [github.com/xyTom/Url-Shorten-Worker](http://github.com/xyTom/Url-Shorten-Worker). then here you can add .html file and add to change url shortener layout as you like.

  

 [![](https://lh3.googleusercontent.com/-EUb-yKIKljs/Ym7jGqpPQTI/AAAAAAAAKjA/Trb1CCIlaJ0nYNcMJFeDBn0Ak8Q7UwzhACNcBGAsYHQ/s1600/1651434258804073-31.png)](https://lh3.googleusercontent.com/-EUb-yKIKljs/Ym7jGqpPQTI/AAAAAAAAKjA/Trb1CCIlaJ0nYNcMJFeDBn0Ak8Q7UwzhACNcBGAsYHQ/s1600/1651434258804073-31.png) 

  

\- If you added your custom .html file then edit and add the above code by replacing your site to get authentication window.

  

Done, you successfully created self hosted url shortner website using Cloudflare.

  

Atlast, this are just highlighted features of 

xyTom/Url-Shorten-Worker there may be many hidden features in-built to provide external features for ultimate usage experience, anyway if you want to create secure URL shortener website then using this method is best choice.  

  

Overall, it is very easy to implement xyTom/Url-Shorten-Worker on Cloudflare to get self hosting URL shortener for free, thanks to user friendly GitHub repository but in any project there is always space available for improvement so let's wait and see will xyTom/Url-Shorten-Worker get any major changes in future to make it even better as of now it's fantastic.

  

Moreover, xyTom/Url-Shorten-Worker + Cloudflare Workers is one of the very few methods available out there on internet to get secure and reliable URL shortener for free, yes indeed if you're searching for such method then xyTom/Url-Shorten-Worker has potential to become your new favourite for sure.

  

Finally, this is how you can get free self hosting URL shortener using Cloudflare, are you an existing user of this method? If yes do say your experience and mention if you know any better method to get secure URL shortener in our comment section below, see ya :)