---
title: 'How to create a serverless Google Drive indexer using Cloudflare.'
date: 2022-05-05T22:45:00.001+05:30
draft: false
url: /2022/05/how-to-create-serverless-google-drive.html
tags: 
- How
- Cloudflare Workers
- technology
- Create
- Google Drive Indexer
---

 [![](https://lh3.googleusercontent.com/-1jM97uweY4M/YnQGHbr7VNI/AAAAAAAAKuE/yfGTFfEn5sIk7gCW22QTuvG9byZdQr3YACNcBGAsYHQ/s1600/1651770904696097-0.png)](https://lh3.googleusercontent.com/-1jM97uweY4M/YnQGHbr7VNI/AAAAAAAAKuE/yfGTFfEn5sIk7gCW22QTuvG9byZdQr3YACNcBGAsYHQ/s1600/1651770904696097-0.png) 

  

  

Drive is undoubtedly one of the most popular free cloud storage platform from search engine giant Google where you can 

store all your files but like any other cloud storage platform you account is linked to your Email thus if by any chance you lose your account then you can't access Drive and it's files if they are private.

  

Usually, Google Drive users who never want to loose files create public links of files and save them somewhere safe so that they can access and download them anytime but Google Drive public links not only lengthy in characters but also don't look professional if you want to send on chat or include in articles etc.

  

If you're someone who frequently share Google Drive folders and files on blogs or websites then for sure it's very important brand Google Drive lengthy links with your custom domain isn't to get credits and let people know your'e the real owner of files right? but unfortunately as of now Google Drive has no option to customize links.

  

Eventhough, you can use url shortener platforms like Rebrand.ly to shorten Google Drive lengthy links with your custom domain yet once you load short link on browser it will redirect to original Google Drive lengthy links, so people will just share Google Drive lengthy links on internet without giving credits to you.

  

Recently, we found an github project named aicrou goindex-theme-acrou to create a serverless Google Drive indexer using Cloudflare Workers which supports custom domain so from now people will know you're the real owner of files, isn't cool? are you ready to create free custom domain Google Drive indexer? If yes let's    get started.

  

**• How to create a serverless free Google Drive indexer using Cloudflare Workers •**

 **[![](https://lh3.googleusercontent.com/-BlMhRszXmQ8/YnQGGPKRLcI/AAAAAAAAKuA/mUbtg4ZmYQ0WOHkKjbR3sf1BlZzdwhSKACNcBGAsYHQ/s1600/1651770899578066-1.png)](https://lh3.googleusercontent.com/-BlMhRszXmQ8/YnQGGPKRLcI/AAAAAAAAKuA/mUbtg4ZmYQ0WOHkKjbR3sf1BlZzdwhSKACNcBGAsYHQ/s1600/1651770899578066-1.png)** 

\- Go to [goindex-builder-acrou.glitch.me](https://goindex-builder-acrou.glitch.me/)

then tap on **Click me**

 **[![](https://lh3.googleusercontent.com/-n8l4BXyRedY/YnQGEoKGYEI/AAAAAAAAKt8/3uzR_aMDaRgTfOfyg-OOeTInTWHU8BTMwCNcBGAsYHQ/s1600/1651770893526178-2.png)](https://lh3.googleusercontent.com/-n8l4BXyRedY/YnQGEoKGYEI/AAAAAAAAKt8/3uzR_aMDaRgTfOfyg-OOeTInTWHU8BTMwCNcBGAsYHQ/s1600/1651770893526178-2.png)**   

\- Select your Google Account then tap on **Allow**

 **[![](https://lh3.googleusercontent.com/-7Qk-9RB8x1s/YnQGDfMAN6I/AAAAAAAAKt4/RuoqZfJKYAIF_svaPmvflEkiigvkRY69QCNcBGAsYHQ/s1600/1651770887883885-3.png)](https://lh3.googleusercontent.com/-7Qk-9RB8x1s/YnQGDfMAN6I/AAAAAAAAKt4/RuoqZfJKYAIF_svaPmvflEkiigvkRY69QCNcBGAsYHQ/s1600/1651770887883885-3.png)** 

\- Copy Authorization code then go back to 

[goindex-builder-acrou.glitch.me](https://www.goindex-builder-acrou.glitch.me)

  

 [![](https://lh3.googleusercontent.com/-cjbcsYBO6Tw/YnQGBzbacUI/AAAAAAAAKt0/q3BAhBryAgk_cQ3ZA7EWUZEx227IU8YRQCNcBGAsYHQ/s1600/1651770883151539-4.png)](https://lh3.googleusercontent.com/-cjbcsYBO6Tw/YnQGBzbacUI/AAAAAAAAKt0/q3BAhBryAgk_cQ3ZA7EWUZEx227IU8YRQCNcBGAsYHQ/s1600/1651770883151539-4.png) 

  

\- In fill the form, Paste your Authorization code then scroll down.

  

 [![](https://lh3.googleusercontent.com/-v0AqyTJibRU/YnQGAk03-CI/AAAAAAAAKtw/U2yAu5BU-kQLlYcEyojDOfcRUGT985nWgCNcBGAsYHQ/s1600/1651770878564981-5.png)](https://lh3.googleusercontent.com/-v0AqyTJibRU/YnQGAk03-CI/AAAAAAAAKtw/U2yAu5BU-kQLlYcEyojDOfcRUGT985nWgCNcBGAsYHQ/s1600/1651770878564981-5.png) 

  

\- Select language then tap on **Get Code**

 **[![](https://lh3.googleusercontent.com/-K6XH2UkElLo/YnQF_m6OOeI/AAAAAAAAKts/3yxEU7D0MC4242RKYZu7Fj6C2o5pMjwcACNcBGAsYHQ/s1600/1651770872795149-6.png)](https://lh3.googleusercontent.com/-K6XH2UkElLo/YnQF_m6OOeI/AAAAAAAAKts/3yxEU7D0MC4242RKYZu7Fj6C2o5pMjwcACNcBGAsYHQ/s1600/1651770872795149-6.png)** 

  

\- In Finished, tap on **Copy the code to clipboard**

 **[![](https://lh3.googleusercontent.com/-juO7AzvD5BE/YnQF-HE7-hI/AAAAAAAAKto/qQGee0WirGkkU1hY1gQO3Gk1-fn6qfL7QCNcBGAsYHQ/s1600/1651770867790044-7.png)](https://lh3.googleusercontent.com/-juO7AzvD5BE/YnQF-HE7-hI/AAAAAAAAKto/qQGee0WirGkkU1hY1gQO3Gk1-fn6qfL7QCNcBGAsYHQ/s1600/1651770867790044-7.png)** 

\- Go to [Cloudflare](http://Cloudflare.com) and sign up or login the add Website into your dashboard.

  

**[\+ How to add cloudflare on blogger to optimize and stop bot traffic.](https://www.techtracker.in/2021/12/how-to-add-cloudflare-on-blogger-to.html)**

  

 [![](https://lh3.googleusercontent.com/-Ua5R18AJuoo/YnQF8_b4D_I/AAAAAAAAKtk/v3rzKwmqJj4PqQ1TYceojK5YExT0VIsTQCNcBGAsYHQ/s1600/1651770862829449-8.png)](https://lh3.googleusercontent.com/-Ua5R18AJuoo/YnQF8_b4D_I/AAAAAAAAKtk/v3rzKwmqJj4PqQ1TYceojK5YExT0VIsTQCNcBGAsYHQ/s1600/1651770862829449-8.png) 

  

\- Tap on **≡** then tap on **Workers**

 **[![](https://lh3.googleusercontent.com/-CNwYzXIaxPM/YnQF7h5s40I/AAAAAAAAKtg/qOOj9V4WtYkrG7_49UfRymltcCbxz3N3gCNcBGAsYHQ/s1600/1651770857781930-9.png)](https://lh3.googleusercontent.com/-CNwYzXIaxPM/YnQF7h5s40I/AAAAAAAAKtg/qOOj9V4WtYkrG7_49UfRymltcCbxz3N3gCNcBGAsYHQ/s1600/1651770857781930-9.png)** 

\- Tap on **Create a Service**

 **[![](https://lh3.googleusercontent.com/-BuJDLE-Sdpo/YnQF6S7mJ9I/AAAAAAAAKtc/uAps6j_1EVET1yj_xxH4cUbFo8d2LUb-QCNcBGAsYHQ/s1600/1651770852755298-10.png)](https://lh3.googleusercontent.com/-BuJDLE-Sdpo/YnQF6S7mJ9I/AAAAAAAAKtc/uAps6j_1EVET1yj_xxH4cUbFo8d2LUb-QCNcBGAsYHQ/s1600/1651770852755298-10.png)** 

\- Enter **Service name** then scroll down

  

 [![](https://lh3.googleusercontent.com/-JiVRab0juOI/YnQF5Jc7ZMI/AAAAAAAAKtY/niGgOp15xikobf2Di1hQMsWK4u4nbqfcwCNcBGAsYHQ/s1600/1651770848451879-11.png)](https://lh3.googleusercontent.com/-JiVRab0juOI/YnQF5Jc7ZMI/AAAAAAAAKtY/niGgOp15xikobf2Di1hQMsWK4u4nbqfcwCNcBGAsYHQ/s1600/1651770848451879-11.png) 

  

\- Tap on **Create service**

 **[![](https://lh3.googleusercontent.com/-kNeVQXRy3N4/YnQF31TZtFI/AAAAAAAAKtU/8qxV-jg422ASaVnKvQC6-I8hEq24yi9RgCNcBGAsYHQ/s1600/1651770843002533-12.png)](https://lh3.googleusercontent.com/-kNeVQXRy3N4/YnQF31TZtFI/AAAAAAAAKtU/8qxV-jg422ASaVnKvQC6-I8hEq24yi9RgCNcBGAsYHQ/s1600/1651770843002533-12.png)** 

\- Tap on **Quick edit**

 **[![](https://lh3.googleusercontent.com/-sUg9WSIcqe4/YnQF2pTwaZI/AAAAAAAAKtQ/BWZCenzvHsQp3nF5x89yt_S_5w3fq82YQCNcBGAsYHQ/s1600/1651770837168519-13.png)](https://lh3.googleusercontent.com/-sUg9WSIcqe4/YnQF2pTwaZI/AAAAAAAAKtQ/BWZCenzvHsQp3nF5x89yt_S_5w3fq82YQCNcBGAsYHQ/s1600/1651770837168519-13.png)** 

\- Remove existing code and paste the code which you copied earlier then tap on **Save and Deploy**

 **[![](https://lh3.googleusercontent.com/-EdjaOrQKYYA/YnQF1IJoIwI/AAAAAAAAKtM/kAYh8HDGbjEA1Q3IQ28sXRu6lqE2K6oqwCNcBGAsYHQ/s1600/1651770832022174-14.png)](https://lh3.googleusercontent.com/-EdjaOrQKYYA/YnQF1IJoIwI/AAAAAAAAKtM/kAYh8HDGbjEA1Q3IQ28sXRu6lqE2K6oqwCNcBGAsYHQ/s1600/1651770832022174-14.png)** 

\- Tap on **Save and Deploy** again

  

 [![](https://lh3.googleusercontent.com/-ACQV6u_Ygdw/YnQFz0akGxI/AAAAAAAAKtI/a2nFjATHJFQWjDSdIJpD98YSNUOnvSfewCNcBGAsYHQ/s1600/1651770826945418-15.png)](https://lh3.googleusercontent.com/-ACQV6u_Ygdw/YnQFz0akGxI/AAAAAAAAKtI/a2nFjATHJFQWjDSdIJpD98YSNUOnvSfewCNcBGAsYHQ/s1600/1651770826945418-15.png) 

  

\- Tap on **≡** then tap on **Websites**

 **[![](https://lh3.googleusercontent.com/-JM_apPE2Htw/YnQFyQNQ0AI/AAAAAAAAKtE/1o1fX0xjeVUPJ6shMB4m1NCKfR78vhFkQCNcBGAsYHQ/s1600/1651770822046820-16.png)](https://lh3.googleusercontent.com/-JM_apPE2Htw/YnQFyQNQ0AI/AAAAAAAAKtE/1o1fX0xjeVUPJ6shMB4m1NCKfR78vhFkQCNcBGAsYHQ/s1600/1651770822046820-16.png)**   

\- Select your website

  

 [![](https://lh3.googleusercontent.com/-hD7_KBnor2g/YnQFxc-59aI/AAAAAAAAKtA/f9bnvK2M3XYYiTNycGQVl3F2c8P7SiNvQCNcBGAsYHQ/s1600/1651770817700183-17.png)](https://lh3.googleusercontent.com/-hD7_KBnor2g/YnQFxc-59aI/AAAAAAAAKtA/f9bnvK2M3XYYiTNycGQVl3F2c8P7SiNvQCNcBGAsYHQ/s1600/1651770817700183-17.png) 

  

\- Tap on **≡** then tap on **DNS**

 **[![](https://lh3.googleusercontent.com/-1Xpja59tL-k/YnQFwX4KMjI/AAAAAAAAKs8/_Eg5_-PMYiYZuMDQ6XKgHsdCeO8XAAkDgCNcBGAsYHQ/s1600/1651770812885947-18.png)](https://lh3.googleusercontent.com/-1Xpja59tL-k/YnQFwX4KMjI/AAAAAAAAKs8/_Eg5_-PMYiYZuMDQ6XKgHsdCeO8XAAkDgCNcBGAsYHQ/s1600/1651770812885947-18.png)** 

\- Tap on **+ Add record** and add subdomain using A or Cname records.

  

\- If A records failed then try Cname records it will work for sure.

  

\- Tap on **Save**

 **[![](https://lh3.googleusercontent.com/-BZajml86_EM/YnQFuzKJSrI/AAAAAAAAKs4/xwMKLck6fHgEOP6LEGRHQKEex_RkWRk-wCNcBGAsYHQ/s1600/1651770807563964-19.png)](https://lh3.googleusercontent.com/-BZajml86_EM/YnQFuzKJSrI/AAAAAAAAKs4/xwMKLck6fHgEOP6LEGRHQKEex_RkWRk-wCNcBGAsYHQ/s1600/1651770807563964-19.png)** 

\- Now, go back to Workers then tap on **Add route**

 **[![](https://lh3.googleusercontent.com/-CVuM_AXKXFg/YnQFtrv1KOI/AAAAAAAAKs0/uUq3LMVtRXAIqII8NhbJtA5k6O5LBuK-gCNcBGAsYHQ/s1600/1651770802577446-20.png)](https://lh3.googleusercontent.com/-CVuM_AXKXFg/YnQFtrv1KOI/AAAAAAAAKs0/uUq3LMVtRXAIqII8NhbJtA5k6O5LBuK-gCNcBGAsYHQ/s1600/1651770802577446-20.png)** 

\- Replace my sub-domain with yours, select Service and Environment then tap on **Save**

 **[![](https://lh3.googleusercontent.com/-sGJnAGYx9bA/YnQFsbhINSI/AAAAAAAAKsw/IGEqoEMhHGMysPZlXWUckxp2eTR4pWpvACNcBGAsYHQ/s1600/1651770796184526-21.png)](https://lh3.googleusercontent.com/-sGJnAGYx9bA/YnQFsbhINSI/AAAAAAAAKsw/IGEqoEMhHGMysPZlXWUckxp2eTR4pWpvACNcBGAsYHQ/s1600/1651770796184526-21.png)** 

  

\- Voila, you successfully created a free serverless custom domain Google Indexer.

  

Atlast, this are just highlighted features of Cloudflare Workers and aicrou goindex-theme-acrou project there may be many hidden features in-built to provide external features for ultimate usage experience, anyway if you want to create best indexer then aicrou goindex-theme-acrou is best on go choice for sure.

  

Overall, it is very easy to implement aicrou goindex-theme-acrou project on Cloudflare Workers to get simple and clean user-friendly Google Drive indexer for free, thanks to user friendly GitHub repository but in any project there is always space available for improvement so let's wait and see will goindex-theme-acrou project get any major changes in future to make it even better as of now it's pretty nice.

  

Moreover, goindex-theme-acrou project + Cloudflare Workers is one of the very few methods available out there on internet to create best free serverless Google drive indexer, yes indeed if you're searching for such method then goindex-theme-acrou project potential to become your new favourite for sure.

  

Finally, this is how you can create a free serverless Google Drive indexer using Cloudflare Workers, are you an existing user of this method? If yes do say your experience and mention if you know any better method to get Google Drive indexer in our comment section below, see ya :)