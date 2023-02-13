import Mustache from "mustache";

const body = document.querySelector("body");

if (body) {
  body.innerHTML = Mustache.render(body.innerHTML, {
    profile: {
      full_name: "Arthur Jacquemin",
      firstName: "Arthur",
      lastName: "Jacquemin",
      description:
        "Je suis passionné par les technologies de l'informatique et persuadé que l'analyse des données constitue un défi majeure de performance et de productivité dans les année à venir. C'est pourquoi je me forme tant sur le plan de la programmation que sur la maîtrise des données (notamment financière et comptable).",
      location: "Versailles, Île-de-France, France",
      headline: "CTO@AKATEK",
      current_job_title: "CTO@AKATEK",
      company: {
        company_name: "Akatek.io",
        company_logo:
          "https://media.licdn.com/dms/image/C4D0BAQFN6eJt1O7bmg/company-logo_100_100/0/1638206477989?e=1683763200&v=beta&t=qxJxGcRnVuHvscWSZg2LjqfdRZeGWsqnHs_eUNIGVYM",
      },
      profile_id: "34793666",
      linkedin_profile_url:
        "https://www.linkedin.com/in/arthur-jacquemin-34793666/",
      profile_image_url:
        "https://media.licdn.com/dms/image/D4E03AQHbdfGIvgaKkw/profile-displayphoto-shrink_400_400/0/1644403352089?e=1681344000&v=beta&t=wBPX1tfntijxCdQKkIxZuG20oV6TFKfY9Ie-CDb-Sl4",
    },
    lower:
      () =>
      (text: string, render: (text: string) => string): string =>
        render(text).toLowerCase(),
  });
}
