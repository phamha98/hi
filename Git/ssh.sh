cd ~/.ssh && ssh-keygen

Generating public/private rsa key pair.
Enter file in which to save the key (/Users/phamha/.ssh/id_rsa):company


ssh-add ~/.ssh/company
cat company.pub | pbcopy
