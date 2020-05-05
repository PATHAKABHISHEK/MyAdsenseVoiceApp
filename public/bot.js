var guide = document.getElementById("guide");

function download(file, text) {
  //creating an invisible element
  var element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8, " + encodeURIComponent(text)
  );
  element.setAttribute("download", file);

  //the above code is equivalent to
  // <a href="path of file" download="file name">

  document.body.appendChild(element);

  //onClick property
  element.click();

  document.body.removeChild(element);
}

guide.addEventListener("click", function () {
  text = `
    >> Adsense
    Hello Buddy, I am Adsense, You can follow user guide for interacting with me,  Who are You, Can I have Your Name Please ?
    
    >> User 
    My Name is Abhishek Pathak

    >> Adsense
    Hi, Abhishek, I can do 4 Things for You ?
       First,  You can Ask For What are currently available newspaper languages in MyAdsense,
       second, You can also Ask For What are all the ad Categories in particular newspaper language,
       third, You can ask for What are all newspapers in specific newspaper language and category ?
       and fourth,  You can Ask For Newspaper Ad rates.
       Which Option You Like the most ?
    
    Which Option You Like the most ? 
    
    >> User
    I liked first Option
    I liked second option
    second option
    give second option
    provide second option
    
    >> Adsense(If first Option)
    Ok, Abhishek, You want Currently Available Newspaper Languages, That seems Cool!!!
 buddy, The available newspaper languages in myadsense are English, Hindi, Punjabi. 
    
    >> User    
    Can You tell again Tell me What you can Do for us ?
    tell me what you can do for me ?
    tell me again what you can do for me ?
    
    >> Adsense
    Hi, Abhishek, I can do 4 Things for You ?
    First,  You can Ask For What are currently available newspaper languages in MyAdsense,
    second, You can also Ask For What are all the ad Categories in particular newspaper language,
    third, You can ask for What are all newspapers in specific newspaper language and category ?
    and fourth,  You can Ask For Newspaper Ad rates.
    Which Option You Like the most ?
    
    >> User 
    I want second Option
    
    >> Adsense(Second Option Selected)
    Ok, Abhishek, You want possible ad categories, Just wait a minute, I will be back soon 
    
    >> User
    Abhishek, The ad Categories are property, marriage, etc.
    
    >> Adsense(If third Option is Selected)
    Ok, Abhishek, You want All the newspapers from some language and some category, That sounds Exciting!!! Tell me the language in which you want to search all newspapers

    
    >> User
    English language
    
    >> Adsense
    Now Tell me the Category of ads in which you want to search newspapers

    >>User
    property Category

    >> Adsense
    Abhishek, You want all the newspapers in English language and property category, Just wait a minute, I will be back
    
    Abhishek, The newspapers in English language and proprty category are indianexpress, hindustantimes, tribune, etc.

    >> Adsense(If fourth option is selected)
    Ok, Abhishek, You want Newspaper Ad rates, That sounds Good!!!
       Tell me the newspaper Language In which you want to publish ad ? 
    
    >> User
    English language
    
    >> Adsense
    Now Tell me In which Newspaper You want to publish ad

    >> User
    Indian express Newspaper
    tribune newspaper

    >>Adsense
    Abhishek, Now What will be the category in which you want to publish ad

    >> User
    property category
    
    >> Adsense
    Abhishek, Now What will be the edition in which you want to publish ad
    
    >> User
    delhi edition
    
    >> Adsense
    Abhishek, Now What will be the type for your new ad

    >> User
    text type

    >> Adsense
    Abhishek, I got all the stuff just wait a minute

    The ad rate in hindu newspaper in  text type and in property category is rupees 2,200 for 4 words
    `;
  name = "Adsense_UserGuide.txt";
  download(name, text);
});
