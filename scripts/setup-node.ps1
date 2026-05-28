$ErrorActionPreference = "Stop"

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$Root = Split-Path -Parent $ScriptDir
$NodeVersion = "v24.15.0"
$NodeFolderName = "node-$NodeVersion-win-x64"
$Url = "https://nodejs.org/dist/$NodeVersion/$NodeFolderName.zip"

$DownloadsDir = Join-Path $Root "downloads"
$ToolsDir = Join-Path $Root "tools"
$TargetDir = Join-Path $ToolsDir "node"
$ExtractDir = Join-Path $DownloadsDir "node-extract"
$ZipPath = Join-Path $DownloadsDir "$NodeFolderName.zip"

New-Item -ItemType Directory -Force -Path $DownloadsDir | Out-Null
New-Item -ItemType Directory -Force -Path $ToolsDir | Out-Null

if (Test-Path $ExtractDir) {
    Remove-Item $ExtractDir -Recurse -Force
}
New-Item -ItemType Directory -Force -Path $ExtractDir | Out-Null

Write-Host "Downloading Node.js from: $Url"
Invoke-WebRequest -Uri $Url -OutFile $ZipPath

Write-Host "Extracting Node.js..."
Expand-Archive -Path $ZipPath -DestinationPath $ExtractDir -Force

$ExtractedNodeDir = Join-Path $ExtractDir $NodeFolderName
if (!(Test-Path $ExtractedNodeDir)) {
    throw "Extracted Node.js folder was not found."
}

if (Test-Path $TargetDir) {
    Remove-Item $TargetDir -Recurse -Force
}
New-Item -ItemType Directory -Force -Path $TargetDir | Out-Null

Copy-Item -Path (Join-Path $ExtractedNodeDir "*") -Destination $TargetDir -Recurse -Force

Write-Host "Node.js prepared at: $TargetDir"
