<!-- Intestazione -->
<div align='center' id='top'>
<img src='./images/favicon.png' alt='The Infinite Counter Logo' width = '100' height = '100'>
<h1>The Infinite Counter</h1>
</div>

<!-- Sommario -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About the project</a></li>
    <li><a href="#built-with">Built with</a></li>
    <li><a href="#javascript components">JavaScript components</a>
      <ul>
        <li><a href="#add-functions">Add functions</a></li>
        <li><a href="#move-function">Move function</a></li>
        <li><a href="#unlock-function">Unlock function</a></li>
        <li><a href="#circle-functions">Circle functions</a></li>
      </ul>
    <li><a href="#usage">Usage</a>
    </li>
  </ol>
</details>
<br>

<!-- Informazioni sul progetto -->
## About the project
<p>The main function of the project is to be a counter. To make the user experience more interactive, several features have been added. There are five buttons that unlock at gradual levels of the counter and allow you to add larger quantities to it. There is also a reset button that allows you to reset the counter with a single click. </p>
<div align='center'>
<img src='./images/screenshot-1.png' alt='Initial Page' width = '500'>
</div>
<p align="right">(<a href="#top">back to top</a>)</p>
<br>

<!-- Coustruito con -->
## Built with
* [Bootstrap](https://getbootstrap.com)
* [JavaScript](https://www.javascript.com/)
<p align="right">(<a href="#top">back to top</a>)</p>
<br>

<!-- Componenti JavaScript -->
## JavaScript components
### Add functions
<p>For each button a function has been created that adds (or subtracts) a certain quantity to the counter. Each add function then calls two other functions. The <strong><em>moveIn()</em></strong> function (or in the subtraction case <strong><em>moveOut()</em></strong>) and the <strong><em>unlock()</em></strong> function.</p>
<img src='./images/js1.png' width = '500'>

### Move function
<p>Adding the class <strong><em>move-in</em></strong> (or in the subtraction case <strong><em>move-out</em></strong>) it allows you to create a sort of animation of a small circle entering or exiting the main circle</p>
<img src='./images/js2.png' width = '500'>

### Unlock function
<p>The function checks the current level of the counter and unlocks the additional buttons that allow you to add more quantities.</p>
<img src='./images/js3.png' width = '500'>

### Circle functions
<p>The function changes the appearance of elements on the page. It changes the color of the background, the counter and the in / out circle.</p>
<img src='./images/js4.png' width = '500'>
<p align="right">(<a href="#top">back to top</a>)</p>
<br>

## Usage
<p>Once the score of <strong>1.000</strong> is reached, the first button will unlock. This will allow you to add 10 units for each click.</p>
<div align='center'>
<img src='./images/usage1.png' height = '300' align='center'>
</div>

<p>The following steps for unlocking the buttons are:</p>
<ul>
  <li><strong>10.000</strong> to unlock the +100 button.</li>
  <li><strong>100.000</strong> to unlock the +1.000 button.</li>
  <li><strong>1.000.000</strong> to unlock the +10.000 button.</li>
  <li><strong>10.000.000</strong> to unlock the +100.000 button.</li>
</ul>
<div align='center'>
<img src='./images/usage2.png' height = '300' align='center'>
</div>

<p><strong>Attention!</strong> Once the additional keys are unlocked, the reset button <strong>will not</strong> reset them.
<p align="right">(<a href="#top">back to top</a>)</p>
