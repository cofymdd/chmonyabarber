{
   description = "website";

   inputs = {
      nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
   };

   outputs =
      { nixpkgs, ... }:
      let
         eachSystem =
            systems: function:
            nixpkgs.lib.genAttrs systems (
               system:
               function {
                  inherit system;
                  pkgs = import nixpkgs { inherit system; };
               }
            );
      in
      {
         devShells = eachSystem [ "x86_64-linux" "x86_64-darwin" "aarch64-linux" "aarch64-darwin" ] (
            { pkgs, ... }:
            {
               default = pkgs.mkShell {
                  packages = [
                     pkgs.bun
                     pkgs.nixd
                     pkgs.nixfmt
                  ];
               };
            }
         );
      };
}
