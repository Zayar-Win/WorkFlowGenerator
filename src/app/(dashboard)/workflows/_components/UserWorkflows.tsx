import waitFor from "@/lib/helpers/waitFor";
import React from "react";

type Props = {};

const UserWorkflows = async (props: Props) => {
  await waitFor(3000);
  return <div>UserWorkflows</div>;
};

export default UserWorkflows;
