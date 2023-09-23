import { Button } from "../Button";

export function Deploy({
  handleNext,
  handleBack,
}: {
  handleNext: () => void;
  handleBack: () => void;
}) {
  return (
    <div>
      <p>deploy here</p>
      <p>
        This is the part where you take your incredible project, and deploy it!
        Deployment is smooth and easy, you will utilize my boyfriends sharp and
        optimized smart contracts.
      </p>
      <Button action={handleNext} text="Proceed" />
      <Button
        action={handleBack}
        text={"Back"}
        margin={"0 auto"}
        color={"#666"}
        backgroundColor={"#fff"}
      />
    </div>
  );
}
