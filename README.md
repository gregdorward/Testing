# Testing

Set up instructions:

In terminal - git clone https://github.com/gregdorward/Testing.git

To run tests:

In terminal - mvn test
In ide - run RunTests.java class

Test logs:

target/cucumber/index.html contains the test run results
target/cucumber/testOutput.html contains the webpage performance stats. This currently needs to be deleted before each test run if you want to capture only fresh results

Testing the addition of a button to run a Postman suite

<div class="postman-run-button"
data-postman-action="collection/import"
data-postman-var-1="e266a775aedbf984abc2"></div>
<script type="text/javascript">
  (function (p,o,s,t,m,a,n) {
    !p[s] && (p[s] = function () { (p[t] || (p[t] = [])).push(arguments); });
    !o.getElementById(s+t) && o.getElementsByTagName("head")[0].appendChild((
      (n = o.createElement("script")),
      (n.id = s+t), (n.async = 1), (n.src = m), n
    ));
  }(window, document, "_pm", "PostmanRunObject", "https://run.pstmn.io/button.js"));
</script>