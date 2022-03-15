I have recently started using the [Better PDF plugin](https://github.com/MSzturc/obsidian-better-pdf-plugin) because it allows me to create links to specific PDF pages which work both in Windows and Mac computers. The fact that I do not even need to click on the link but the page is automatically embedded in the note is an added feature.  

I have created two scripts for creating automatically the necessary snippet for embedding the current PDF page in an Obsidian note. 

I prefer to save all my PDF files in one folder named "PDF files" inside my Obsidian vault. If you do not want to use this convention you need to adjust the url value in the scripts accordingly.  

The generated snippet has the following form:


````
```pdf
{"url": "/PDF files/pdfTitle",
"page": [currentPDFpage]}
```
````
The pdfTitle and currentPDFpage are autopopulated. 

## for Windows users
If you are a Windows user you need to use the Adobe Acrobat Pro and create a [new JavaScript Action](https://helpx.adobe.com/uk/acrobat/using/action-wizard-acrobat-pro.html). 

![image](https://user-images.githubusercontent.com/8401687/158350611-3229e6d6-df73-414c-ba6f-9344d7fea0e2.png)


Click on Specify Settings and paste the JavaScript code. Unckeck the option "Prompt User".

![image](https://user-images.githubusercontent.com/8401687/158348453-61e06110-a211-4304-a242-2517526d7129.png)

In order to create the snippet you need to click on the action and then on the start button.

![image](https://user-images.githubusercontent.com/8401687/158349473-b86db899-0c27-4018-b2fb-134303420392.png)

![image](https://user-images.githubusercontent.com/8401687/158349822-9acdf72a-00f8-4be3-b5de-3cd2dbfdbbcf.png)

After executing the action a new window opens with the appropriate code selected which you can copy and past on your Obsidian note.  

![image](https://user-images.githubusercontent.com/8401687/158345046-582ffe24-fd39-4e72-aa3f-14cb5571ef82.png)

## for Mac users
You can either use Adobe Acrobat Pro or the free PDF reader [Skim](https://skim-app.sourceforge.io/) and my simple AppleScript. After executing the AppleScript the snippet will be copied automatically to your clipboard. 

