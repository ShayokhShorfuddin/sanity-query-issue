import { getIssueWithDetails } from "@/sanity/utils/issues-utils";
import { IssuesType } from "../page";

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const issue = await getIssueWithDetails(params.slug);

  return (
    <main>
      <IssuesContent issue={issue} />
    </main>
  );
}

// TODO: Error
function IssuesContent({ issue }: { issue: IssuesType }) {
  return <p>{issue.title}</p>;
}
