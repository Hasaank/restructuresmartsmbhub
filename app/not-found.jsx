import { Button, PageIntro } from "./components/SiteUI";
export default function NotFound() {
  return (
    <PageIntro
      kicker="404 / LET’S GET YOU BACK ON TRACK"
      title={
        <>
          A wrong turn.
          <br />
          <span>Not a dead end.</span>
        </>
      }
      text="That page does not exist. Head home or tell us what you are looking for."
    >
      <Button href="/">Back to home</Button>
      <Button href="/contact" secondary>
        Get in touch
      </Button>
    </PageIntro>
  );
}
