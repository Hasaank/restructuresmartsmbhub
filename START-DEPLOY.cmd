@echo off
setlocal
cd /d "%~dp0"
title SmartSMBHub - Vercel deployment helper

echo This helper builds the app, links your Vercel project, and deploys a PREVIEW.
echo Production deployment requires a separate confirmation after preview review.
echo No passwords or tokens need to be pasted into chat.
echo.
if not exist "package.json" (
  echo ERROR: Keep this file beside package.json. Extract the whole ZIP first.
  pause
  exit /b 1
)
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is missing. Install a current supported Node.js LTS release from nodejs.org.
  echo Then close this window and run this helper again.
  pause
  exit /b 1
)
where npm >nul 2>nul
if errorlevel 1 (
  echo npm is missing. Repair or install Node.js, then try again.
  pause
  exit /b 1
)
echo Step 1: Installing the locked app dependencies...
call npm ci
if errorlevel 1 goto failed
echo.
echo Step 2: Checking the production build...
call npm run build
if errorlevel 1 goto failed
echo.
echo Step 3: Sign in to YOUR Vercel account. Follow the browser/device login instructions.
call npx --yes vercel login
if errorlevel 1 goto failed
echo.
echo Step 4: Link the EXISTING project, not a new duplicate.
echo Choose your correct account/team, then restructuresmartsmbhub.
echo When asked for the code directory, use ./ because package.json is here.
echo In the dashboard, the project Root Directory must be repository root/default.
call npx --yes vercel link
if errorlevel 1 goto failed
echo.
echo Step 5: Deploying a PREVIEW. Copy the resulting URL so you can review it.
call npx --yes vercel
if errorlevel 1 goto failed
echo.
echo Preview deployed. Open its URL and check all pages before publishing.
echo Configure Notion or Resend form variables in Vercel and check real submission delivery.
echo Review LAUNCH-AND-SEO.md, including the existing legal/account/security launch gates.
echo.
echo This helper does NOT update GitHub; see START-HERE.txt for repository upload instructions.
echo.
set "publish="
set /p "publish=To deploy this code to PRODUCTION now, type PUBLISH. Otherwise press Enter to stop: "
if not "%publish%"=="PUBLISH" goto preview_done
echo.
echo Deploying production to the project linked above...
call npx --yes vercel --prod
if errorlevel 1 goto failed
echo.
echo Production deployment command completed. Check the URL printed by Vercel.
echo Follow LAUNCH-AND-SEO.md for Google Search Console setup.
pause
exit /b 0

:preview_done
echo.
echo Stopped after preview. No production deployment was requested.
pause
exit /b 0

:failed
echo.
echo STOPPED because the preceding command failed. Production was not intentionally advanced.
echo Copy the actual error above, or take a screenshot, and share it for troubleshooting.
echo A timeout during deployment can leave a build running; check Vercel before retrying.
pause
exit /b 1
