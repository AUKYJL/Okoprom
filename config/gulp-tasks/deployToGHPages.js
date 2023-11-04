import { exec } from "child_process";

export function deploy(cb) {
  exec(
    "git subtree push --prefix dist origin gh-pages",
    (err, stdout, stderr) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Deployed to gh-pages");
      }
      cb();
    }
  );
}
