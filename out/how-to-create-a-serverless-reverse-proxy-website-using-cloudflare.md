---
title: 'How to create a serverless reverse proxy website using Cloudflare.'
date: 2022-05-03T12:00:00.001+05:30
draft: false
url: /2022/05/how-to-create-serverless-reverse-proxy.html
tags: 
- How
- technology
- Create
- Cloudflare
- Reverse proxy
---

 [![](https://lh3.googleusercontent.com/-4zXvVxQIBp4/YnAK-OW5cFI/AAAAAAAAKm4/rwemvLSDz2IrgPwq-Arqv7aasxmtRJDFwCNcBGAsYHQ/s1600/1651510004598641-0.png)](https://lh3.googleusercontent.com/-4zXvVxQIBp4/YnAK-OW5cFI/AAAAAAAAKm4/rwemvLSDz2IrgPwq-Arqv7aasxmtRJDFwCNcBGAsYHQ/s1600/1651510004598641-0.png) 

  

On Internet, generally you can visit any website you like but some countries block and censor certain apps and websites in thier region to make them inaccessible to thier people for example : china don't allow other countries technologies to get used in thier country so they created a firewall to block foriegn technologies like Google, Yahoo, social networks and apps etc.

  

However, people who don't like censorship and want to access those website or apps that are blocked by country or network provider use virtual private networts aka VPN or proxies to bypass firewalls of thier country, but usually most VPN and proxy provider use centralised servers which are not secure and prone to hackers.

  

Fortunately, we have future of internet Web3 decentralized VPNs like Exido and Sentinel dVPN etc which you can use but they are paid services and the servers are hosted by numerous individual around the world which is secure and reliable, but in case you don't want to use someone else servers or proxies then creating one for yourself is smart choice isn't?

  

[\+ Exidio dVPN - Get 500GB of decentralized privacy for $1.](https://www.techtracker.in/2022/03/exidio-dvpn-get-500gb-of-decentralized.html)

  

[\+ Sentinel Lite - A de-centralised VPN for more security and privacy.](https://www.techtracker.in/2022/01/sentinel-lite-de-centralised-vpn-for.html)

  

It is not easy to create secure VPN or proxy as you have to buy many servers and require good coding skills but recently we found a method to create a free serverless reverse proxy website using Cloudflare, eventhough Proxy don't tunnel all your device Internet through server yet it will surely unblock censored websites.

  

Cloudflare offers numerous cloud technology services to make your website fast and secure from DDos attacks etc so the proxy website which we are going to create now is not only secure but also reliable, so do you like it? are you interested? If yes let's know little more info before we explore more.

  

**• How to create a serverless reverse proxy website using Cloudflare Workers•**

 **[![](https://lh3.googleusercontent.com/-vhW2GqHCTB4/YnAK9EWP_dI/AAAAAAAAKm0/p_fZp0hHgGsZoUGOmJouVaiSQ4hFq4YsQCNcBGAsYHQ/s1600/1651510001402445-1.png)](https://lh3.googleusercontent.com/-vhW2GqHCTB4/YnAK9EWP_dI/AAAAAAAAKm0/p_fZp0hHgGsZoUGOmJouVaiSQ4hFq4YsQCNcBGAsYHQ/s1600/1651510001402445-1.png)** 

\- Go to [Cloudflare.com](http://Cloudflare.com), sign up and login then add your website.

  

[\+ How to add cloudflare on blogger to optimize and stop bot traffic.](https://www.techtracker.in/2021/12/how-to-add-cloudflare-on-blogger-to.html)

  

 [![](https://lh3.googleusercontent.com/-Kr6X8hoJiKU/YnAK8YReGcI/AAAAAAAAKmw/_XtDGz_7YswM0cqrARE7M_AqSfAWaDJtwCNcBGAsYHQ/s1600/1651509998442767-2.png)](https://lh3.googleusercontent.com/-Kr6X8hoJiKU/YnAK8YReGcI/AAAAAAAAKmw/_XtDGz_7YswM0cqrARE7M_AqSfAWaDJtwCNcBGAsYHQ/s1600/1651509998442767-2.png) 

\- Tap on **≡**

 **[![](https://lh3.googleusercontent.com/-TVM6RkceqoY/YnAK7h8ATtI/AAAAAAAAKms/jlWVBIS_59g4gj18Bgyu-CdhetI4bkepwCNcBGAsYHQ/s1600/1651509995238269-3.png)](https://lh3.googleusercontent.com/-TVM6RkceqoY/YnAK7h8ATtI/AAAAAAAAKms/jlWVBIS_59g4gj18Bgyu-CdhetI4bkepwCNcBGAsYHQ/s1600/1651509995238269-3.png)** 

\- Tap on **Workers**

 **[![](https://lh3.googleusercontent.com/-xMQKarN2gYE/YnAK6_0JXBI/AAAAAAAAKmo/EG20MvcP3-8sQT2T0TfBeBOTqmp3E9cLwCNcBGAsYHQ/s1600/1651509991935822-4.png)](https://lh3.googleusercontent.com/-xMQKarN2gYE/YnAK6_0JXBI/AAAAAAAAKmo/EG20MvcP3-8sQT2T0TfBeBOTqmp3E9cLwCNcBGAsYHQ/s1600/1651509991935822-4.png)** 

\- Tap on **Create a Service**

 **[![](https://lh3.googleusercontent.com/-czbXnqROabo/YnAK536tzGI/AAAAAAAAKmk/gK5EZLS7l0EttzEfnOXbPFQFjCzHuPPHACNcBGAsYHQ/s1600/1651509988614601-5.png)](https://lh3.googleusercontent.com/-czbXnqROabo/YnAK536tzGI/AAAAAAAAKmk/gK5EZLS7l0EttzEfnOXbPFQFjCzHuPPHACNcBGAsYHQ/s1600/1651509988614601-5.png)**   

\- Enter your preferred **Service name** then scroll down.

  

 [![](https://lh3.googleusercontent.com/-L7hiZ_whZf0/YnAK5FYCTMI/AAAAAAAAKmg/VHCfyqfF3ZQ9sdM5t_ffbg7ypsIfF224QCNcBGAsYHQ/s1600/1651509985696297-6.png)](https://lh3.googleusercontent.com/-L7hiZ_whZf0/YnAK5FYCTMI/AAAAAAAAKmg/VHCfyqfF3ZQ9sdM5t_ffbg7ypsIfF224QCNcBGAsYHQ/s1600/1651509985696297-6.png) 

  

\- Tap on **Create service**

  

 [![](https://lh3.googleusercontent.com/-bEF7iRYR8MY/YnAK4dldhoI/AAAAAAAAKmc/NXFgw0gGfBIPyVzOccCIutw4ZPN7tO6ngCNcBGAsYHQ/s1600/1651509981847461-7.png)](https://lh3.googleusercontent.com/-bEF7iRYR8MY/YnAK4dldhoI/AAAAAAAAKmc/NXFgw0gGfBIPyVzOccCIutw4ZPN7tO6ngCNcBGAsYHQ/s1600/1651509981847461-7.png) 

  

\- Now, scroll down then tap on **Quick edit**

 **[![](https://lh3.googleusercontent.com/-KXWJZ7jyYQ8/YnAK3X7nvVI/AAAAAAAAKmY/I4GczfxxTn4mqtkJUW-rcfcvJBQDWUMpgCNcBGAsYHQ/s1600/1651509977659504-8.png)](https://lh3.googleusercontent.com/-KXWJZ7jyYQ8/YnAK3X7nvVI/AAAAAAAAKmY/I4GczfxxTn4mqtkJUW-rcfcvJBQDWUMpgCNcBGAsYHQ/s1600/1651509977659504-8.png)** 

\- Remove existing code and add this code from [EtherDream/jsproxy/index.js](https://raw.githubusercontent.com/EtherDream/jsproxy/master/cf-worker/index.js) then tap on **Save and Deploy**

\- If you're familiar with coding and GitHub repository then you can edit this code to change layout of proxy website as you like.

  

 [![](https://lh3.googleusercontent.com/--X9HjolwGNE/YnAK2VGzyWI/AAAAAAAAKmU/Er3_5pNYOn8hLeVyFUxm6efW8smaQguTwCNcBGAsYHQ/s1600/1651509974119129-9.png)](https://lh3.googleusercontent.com/--X9HjolwGNE/YnAK2VGzyWI/AAAAAAAAKmU/Er3_5pNYOn8hLeVyFUxm6efW8smaQguTwCNcBGAsYHQ/s1600/1651509974119129-9.png) 

  

\- Tap on **Save and Deploy** again.

  

 [![](https://lh3.googleusercontent.com/-bgiMNQAUrRs/YnAK1jCT0bI/AAAAAAAAKmQ/PhwFyZ3yoSgd2sMrRdJ05EDNi_p9faW9ACNcBGAsYHQ/s1600/1651509969901726-10.png)](https://lh3.googleusercontent.com/-bgiMNQAUrRs/YnAK1jCT0bI/AAAAAAAAKmQ/PhwFyZ3yoSgd2sMrRdJ05EDNi_p9faW9ACNcBGAsYHQ/s1600/1651509969901726-10.png) 

  

\- Here, you can see proxy website is accessible on Cloudflare sub-domain.

  

 [![](https://lh3.googleusercontent.com/-lEh0lge7l_c/YnAK0UXvLLI/AAAAAAAAKmM/E7ZKUSeQGHEnDs9EMbmH2F4Tzl7RWSIRwCNcBGAsYHQ/s1600/1651509966936508-11.png)](https://lh3.googleusercontent.com/-lEh0lge7l_c/YnAK0UXvLLI/AAAAAAAAKmM/E7ZKUSeQGHEnDs9EMbmH2F4Tzl7RWSIRwCNcBGAsYHQ/s1600/1651509966936508-11.png) 

  

\- Go back, tap on **≡**

 **[![](https://lh3.googleusercontent.com/-FGfd_USPgP4/YnAKzh0d_vI/AAAAAAAAKmI/YWBpfK7w5HowzU144qb3wi6h-vcmmX5KgCNcBGAsYHQ/s1600/1651509963149688-12.png)](https://lh3.googleusercontent.com/-FGfd_USPgP4/YnAKzh0d_vI/AAAAAAAAKmI/YWBpfK7w5HowzU144qb3wi6h-vcmmX5KgCNcBGAsYHQ/s1600/1651509963149688-12.png)** 

\- Tap on **Websites**

 **[![](https://lh3.googleusercontent.com/-msgIKb0QDTg/YnAKykzPGkI/AAAAAAAAKmE/HEjK8TdkgQAAdZkSB4Yj49YsBxJHEslbgCNcBGAsYHQ/s1600/1651509959647120-13.png)](https://lh3.googleusercontent.com/-msgIKb0QDTg/YnAKykzPGkI/AAAAAAAAKmE/HEjK8TdkgQAAdZkSB4Yj49YsBxJHEslbgCNcBGAsYHQ/s1600/1651509959647120-13.png)** 

\- Select your website.

  

 [![](https://lh3.googleusercontent.com/-H586d0eAW9o/YnAKx6CDaqI/AAAAAAAAKmA/fn5uiR9tiAwXHzgXUnttE5eX_5NOcfrBQCNcBGAsYHQ/s1600/1651509955025319-14.png)](https://lh3.googleusercontent.com/-H586d0eAW9o/YnAKx6CDaqI/AAAAAAAAKmA/fn5uiR9tiAwXHzgXUnttE5eX_5NOcfrBQCNcBGAsYHQ/s1600/1651509955025319-14.png) 

  

  

\- Tap on **≡** then tap on **DNS**

  

 [![](https://lh3.googleusercontent.com/-eQTYiKVnokI/YnAKwm_K0fI/AAAAAAAAKl8/TPvk5U3Ai8gnrdnavY3iK0jZnVsjGNfZQCNcBGAsYHQ/s1600/1651509950082444-15.png)](https://lh3.googleusercontent.com/-eQTYiKVnokI/YnAKwm_K0fI/AAAAAAAAKl8/TPvk5U3Ai8gnrdnavY3iK0jZnVsjGNfZQCNcBGAsYHQ/s1600/1651509950082444-15.png) 

  

\- Tap on Add record

  

 [![](https://lh3.googleusercontent.com/-U6OkPkhjrVI/YnAKvWxN-YI/AAAAAAAAKl4/IVdV7lL90fIP7QuchX-WPk630fvdwnhLgCNcBGAsYHQ/s1600/1651509945522186-16.png)](https://lh3.googleusercontent.com/-U6OkPkhjrVI/YnAKvWxN-YI/AAAAAAAAKl4/IVdV7lL90fIP7QuchX-WPk630fvdwnhLgCNcBGAsYHQ/s1600/1651509945522186-16.png) 

  

\- Select Type : A, Enter preferred Name, IPv4 address : 192.0.20 if by any chance this IPv4 address didn't work then you can use your other dns record IPV4 address.

  

\- Tap on **Save**

 **[![](https://lh3.googleusercontent.com/-Qf43pW2cupk/YnAKuV_KtOI/AAAAAAAAKl0/SI8vlxlIs7oVuKueS5JaIVwrmwAgKkSqgCNcBGAsYHQ/s1600/1651509940634814-17.png)](https://lh3.googleusercontent.com/-Qf43pW2cupk/YnAKuV_KtOI/AAAAAAAAKl0/SI8vlxlIs7oVuKueS5JaIVwrmwAgKkSqgCNcBGAsYHQ/s1600/1651509940634814-17.png)** 

\- Go back to Workers, then tap on **Add route**

 **[![](https://lh3.googleusercontent.com/--oekcTSp2D8/YnAKtA_vSeI/AAAAAAAAKlw/ad-1B8OrAv4sUDNhEl60RfTYqfWCILxhwCNcBGAsYHQ/s1600/1651509934800217-18.png)](https://lh3.googleusercontent.com/--oekcTSp2D8/YnAKtA_vSeI/AAAAAAAAKlw/ad-1B8OrAv4sUDNhEl60RfTYqfWCILxhwCNcBGAsYHQ/s1600/1651509934800217-18.png)** 

\- Replace my website with yours, and select Service and Environment then tap on **Save**

 **[![](https://lh3.googleusercontent.com/-Kw2xgjR8YG8/YnAKrg3voDI/AAAAAAAAKls/1xMqiC5T_BwoYXN0NdFtInLsEVskh5bMACNcBGAsYHQ/s1600/1651509928657187-19.png)](https://lh3.googleusercontent.com/-Kw2xgjR8YG8/YnAKrg3voDI/AAAAAAAAKls/1xMqiC5T_BwoYXN0NdFtInLsEVskh5bMACNcBGAsYHQ/s1600/1651509928657187-19.png)** 

\- Bingo, you successfully created serverless reverse proxy website using Cloudflare for free.

  

Atlast, this are just highlighted features of Cloudflare Workers and EtherDream jsproxy script  there may be many hidden features in-built to provide external features for ultimate usage experience, anyway if you want to create secure serverless reverse proxy website right now using this method is one of the best choice.

  

Overall, it is very easy to implement EtherDream jsproxy script on Cloudflare to get serverless reverse proxy website self for free, thanks to user friendly GitHub repository but in any project there is always space available for improvement so let's wait and see will EtherDream jsproxy script get any major changes in future to make it even better as of now it's pretty nice.

  

Moreover, EtherDream jsproxy script + Cloudflare Workers is one of the very few methods available out there on internet to get secure and reliable serverless reverse proxy website for free, yes indeed if you're searching for such method then EtherDream jsproxy has potential to become your new favourite for sure

  

Finally, this is how you can create a free serverless reverse proxy website using Cloudflare, are you an existing user of this method? If yes do say your experience and mention if you know any better method to get serverless reverse proxy in our comment section below, see ya :)