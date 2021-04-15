import React, {useEffect} from "react"

const PrivacyPolicyComponent = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  
  return(
    <div className="container">
      <section>
        <h1>Persondata politik</h1>
        <p>Velvaere massage tager dit privatliv alvorligt og sætter en ære i at beskytte de informationer du giver os når du benytter denne side</p>
        <br/>
        <p>Velvære massage hverken deler eller sælger dine informationer med mindre det er nødvendigt for 3. parts service ydelser som vi benytter her på siden.</p>
        <br/>
        <p>Denne politik vil muligvis blive ændret i fremtiden, i så fald vil denne side ligeledes blive opdateret med de nye ændringer</p>
        <br/>
        
      </section>
      <section>
        <h1>Kontakt og spørgsmål</h1>
        <p>I tilfælde af eventuelle spørgsmål vedrørende indsamling eller brugen af dine personlige informationer, er du velkommen til at skrive til os på <a href="mailto: kaspervhauschildt@protonmail.com">kaspervhauschildt@protonmail.com</a></p>
      </section>

      <section>
        <h1>Brug af personlige informationer</h1>
        <h2>1. Hvorfor indsamler vi personlige informationer?</h2>
        <p>velvaere massage indsamler informationer for at yde den froventede service som siden opfylder</p>
        <p>Det er muligt at vi indsamler information for at:</p>
        <ul>
          <li>Få en bedre forståelse af dine behov, interesser og bestillings historik af diverse produkter og ydelser</li>
          <li>Anbefale speciike prokukter der opfylder dine behov</li>
          <li>Yde effektiv kunde support</li>
          <li>Forbedre forbedre produkt og ydelses katalog</li>
          <li>Kunne reagere på problemer, spørgsmål og efterspørgelser</li>
          <li>Beskytte dig og os mod bedrag</li>
          <li>Samarbejde med eventuelle offentlige instanser, så frem dette vil blive efterspurgt</li>
        </ul>
        <p>Vores lovlige grundelag for at indsamle dine informationer er:</p>
        <ul>
          <li>Dit samtygge. Hvis du har givet samtygge til at vi kan bruge dine oplysninger en eller flere gange så indsamler vi data i overenstemmelse med GDPR regulativerne §6.1a</li>
          <li>Lovpligtig ansvar i form af moms og skatte dokumentation jævnfør GDPR §6.1c</li>
        </ul>
        <h2>3. Hvor længe beholder vi dine oplysninger ?</h2>
        <p>Vi beholer dine oplysninger så længe de kræves for at opfylde de krav der er beskrevet i privatlivs politikken</p>

        <h2>4. typer af personlige informationer</h2>
        <p>velvaere massage insamler forsellige typer information, så som:</p>
        <ul>
          <li>Besøgs oplysninger og benyttede rescurcer inklusiv weblog statistik</li>
          <li>Information du selv giver ved at udfylde frokulare på vores hjemmeside, så som bestilling af massage</li>
          <li>Information giver når du har kontakt med os</li>
        </ul>
        <p>Hvis du bestiller tid eller bestiller varer gennem Velvaere massage så kan det betyde at vi beder om oplysninger for at handlen kan gennemføres, dette kan være:</p>
        <ul>
          <li>E-mail</li>
          <li>Fornavn</li>
          <li>Efternavn</li>
          <li>Addresse</li>
          <li>Betalings oplysninger</li>
          <li>Feedback omkring kundetilfredshed</li>
          <li>Ip addresser</li>
          <li>Klokkeslet for besøg</li>
          <li>Sprog</li>
          <li>personlige preferancer</li>
          <li>produkt og ydelses preferancer</li>
          <li>browser type</li>
          <li>diverse administrative computer trafik informationer</li>
        </ul>
      </section>

      <section>
        <h1> Cookies</h1>
        <p>vi bruger ikke cookies på denne hjemmeside</p>

        sidst opdateret d. 05-04-2021
      </section>
    </div>
  )
}

export default PrivacyPolicyComponent;