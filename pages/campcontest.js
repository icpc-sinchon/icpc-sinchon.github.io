export async function getServerSideProps(context) {
  return {
    redirect: {
      destination: "/camp-contest",
      permanent: false,
    },
  };
}
export default function CampContestPage() {
  return <div />;
}
