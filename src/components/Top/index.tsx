import { styled } from "styled-components";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";
import { shortenEthAddress } from "@/utils/shortenEthAddress";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Search as SearchIcon } from "styled-icons/ionicons-outline";
import { usePrivy } from "@privy-io/react-auth";
import { useLogout } from "@privy-io/react-auth";

export default function Top() {
  const [isConnected, setIsConnected] = useState(false);
  const router = useRouter();
  const { user, ready } = usePrivy();
  const { logout } = useLogout({
    onSuccess: () => {
      router.push("/onboarding");
    },
  });

  useEffect(() => {
    const delay = 3000; // 3 seconds delay (adjust as needed)
    const timeout = setTimeout(() => {
      // Check if user is still not available after the delay
      if (!user) {
        router.push("/onboarding");
      }
    }, delay);

    // Clear the timeout if user becomes available before the delay
    return () => clearTimeout(timeout);
  }, [user, router]);
  return (
    <Container>
      <Logo>COPYTRADE</Logo>
      {user && user.wallet && (
        <>
          <SearchContainer>
            <StyledSearchIcon />
          </SearchContainer>
          <WalletContainer>
            <button onClick={logout}>Logout</button>
            <AddressContainer>
              <Jazzicon
                diameter={14}
                seed={jsNumberForAddress(user.wallet.address)}
              />
              <Address>{shortenEthAddress(user.wallet.address)}</Address>
            </AddressContainer>
          </WalletContainer>
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 0px 24px 0px;
  align-items: center;
  height: 48px;
  width: 100%;
`;

const WalletContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  text-align: right;

  &:hover {
    opacity: 0.8;
  }
`;
const AddressContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;
const Address = styled.div`
  font-size: 14px;
`;

const SearchContainer = styled.div`
  border: 1px solid #e5e5e5;
  cursor: pointer;
  display: flex;
  padding: 0px 8px;
  flex-direction: row;
  height: 32px;
  background-color: #f5f5f5;
  border-radius: 24px;
  width: 400px;

  &:hover {
    opacity: 0.8;
  }
`;

const StyledSearchIcon = styled(SearchIcon)`
  color: #6a6a6a;
  width: 16px;
`;

const Logo = styled.div`
  font-size: 14px;
`;
